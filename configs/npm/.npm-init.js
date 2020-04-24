var fs = require('fs'),
    path = require('path'),
    homeDir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
    gitConfig = path.join(homeDir, '.gitconfig'),
    cwd = process.cwd(),
    name = cwd.split('/').pop();
/*
decode function and required functions copied from
https://github.com/npm/ini
in order to parse github config without added reqs
*/
var eol = process.platform === 'win32' ? '\r\n' : '\n'

function dotSplit (str) {
  return str.replace(/\1/g, '\u0002LITERAL\\1LITERAL\u0002')
    .replace(/\\\./g, '\u0001')
    .split(/\./).map(function (part) {
    return part.replace(/\1/g, '\\.')
      .replace(/\2LITERAL\\1LITERAL\2/g, '\u0001')
  })
}

function decode (str) {
  var out = {}
  var p = out
  var section = null
  //          section     |key      = value
  var re = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i
  var lines = str.split(/[\r\n]+/g)

  lines.forEach(function (line, _, __) {
    if (!line || line.match(/^\s*[;#]/)) return
    var match = line.match(re)
    if (!match) return
    if (match[1] !== undefined) {
      section = unsafe(match[1])
      p = out[section] = out[section] || {}
      return
    }
    var key = unsafe(match[2])
    var value = match[3] ? unsafe((match[4] || '')) : true
    switch (value) {
      case 'true':
      case 'false':
      case 'null': value = JSON.parse(value)
    }

    // Convert keys with '[]' suffix to an array
    if (key.length > 2 && key.slice(-2) === '[]') {
      key = key.substring(0, key.length - 2)
      if (!p[key]) {
        p[key] = []
      } else if (!Array.isArray(p[key])) {
        p[key] = [p[key]]
      }
    }

    // safeguard against resetting a previously defined
    // array by accidentally forgetting the brackets
    if (Array.isArray(p[key])) {
      p[key].push(value)
    } else {
      p[key] = value
    }
  })

  // {a:{y:1},"a.b":{x:2}} --> {a:{y:1,b:{x:2}}}
  // use a filter to return the keys that have to be deleted.
  Object.keys(out).filter(function (k, _, __) {
    if (!out[k] ||
      typeof out[k] !== 'object' ||
      Array.isArray(out[k])) {
      return false
    }
    // see if the parent section is also an object.
    // if so, add it to that, and mark this one for deletion
    var parts = dotSplit(k)
    var p = out
    var l = parts.pop()
    var nl = l.replace(/\\\./g, '.')
    parts.forEach(function (part, _, __) {
      if (!p[part] || typeof p[part] !== 'object') p[part] = {}
      p = p[part]
    })
    if (p === out && nl === l) {
      return false
    }
    p[nl] = out[k]
    return true
  }).forEach(function (del, _, __) {
    delete out[del]
  })

  return out
}

function isQuoted (val) {
  return (val.charAt(0) === '"' && val.slice(-1) === '"') ||
    (val.charAt(0) === "'" && val.slice(-1) === "'")
}

function safe (val) {
  return (typeof val !== 'string' ||
    val.match(/[=\r\n]/) ||
    val.match(/^\[/) ||
    (val.length > 1 &&
     isQuoted(val)) ||
    val !== val.trim()) ?
      JSON.stringify(val) :
      val.replace(/;/g, '\\;').replace(/#/g, '\\#')
}

function unsafe (val, doUnesc) {
  val = (val || '').trim()
  if (isQuoted(val)) {
    // remove the single quotes before calling JSON.parse
    if (val.charAt(0) === "'") {
      val = val.substr(1, val.length - 2)
    }
    try { val = JSON.parse(val) } catch (_) {}
  } else {
    // walk the val to find the first not-escaped ; character
    var esc = false
    var unesc = ''
    for (var i = 0, l = val.length; i < l; i++) {
      var c = val.charAt(i)
      if (esc) {
        if ('\\;#'.indexOf(c) !== -1) {
          unesc += c
        } else {
          unesc += '\\' + c
        }
        esc = false
      } else if (';#'.indexOf(c) !== -1) {
        break
      } else if (c === '\\') {
        esc = true
      } else {
        unesc += c
      }
    }
    if (esc) {
      unesc += '\\'
    }
    return unesc
  }
  return val
}
/*
^
above decode function and required functions copied from
https://github.com/npm/ini
in order to parse github config without added reqs
*/

function getGitConfig(gitConfFile){
  var exists, conf;
  exists = fs.existsSync(gitConfFile);
  conf = {
    "user": {
      "name": "",
      "email": ""
    }
  };
  if (exists) {
    conf = decode(fs.readFileSync(gitConfFile, 'utf-8'));
  } else {
    console.log("\nGit configuration file does not exist!!!...\n");
  }
  return conf;
}


var ec =
'# editorconfig.org\n' +
'root = true\n\n' +
'[*]\n' +
'indent_style = tab\n' +
'end_of_line = lf\n' +
'charset = utf-8\n' +
'trim_trailing_whitespace = true\n' +
'insert_final_newline = true\n';

var gitatt = '* text=auto\n';

var gitignore = 'node_modules\n';

var jshint =
'{\n' +
'	 "node": true,\n' +
'	 "es5": true,\n' +
'	 "esnext": true,\n' +
'	 "bitwise": true,\n' +
'	 "camelcase": true,\n' +
'	 "curly": true,\n' +
'	 "eqeqeq": true,\n' +
'	 "immed": true,\n' +
'	 "indent": 4,\n' +
'	 "latedef": true,\n' +
'	 "newcap": true,\n' +
'	 "noarg": true,\n' +
'	 "quotmark": "single",\n' +
'	 "regexp": true,\n' +
'	 "undef": true,\n' +
'	 "unused": true,\n' +
'	 "strict": true,\n' +
'	 "trailing": true,\n' +
'	 "smarttabs": true\n' +
'}\n';

var npmignore =
'.npmignore\n' +
'.editorconfig\n' +
'.jshintrc\n' +
'.gitattributes\n';

var files = [
  [".editorconfig", ec],
  [".gitattributes", gitatt],
  [".gitignore", gitignore],
  [".jshintrc", jshint],
  [".npmignore", npmignore]
];

files.forEach(function(file){
   var fileName, fileContent, filePath;
   fileName = file[0];
   fileContent = file[1];
   filePath = path.join(cwd, fileName);
   try {
       fs.lstatSync(filePath)
   } catch(err) {
       fs.writeFileSync(filePath, fileContent)
   }
});

git = getGitConfig(gitConfig);

module.exports = {
    name: name,
    version: '0.1.0',
    "description": name + " is about....",
    "author": {
   		"name": git.user.name,
   		"email": git.user.email
   	},
    "license": "MIT"
};
