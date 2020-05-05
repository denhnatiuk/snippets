let obj = {};
let obj = Object.create(Object.prototype);
let obj = new Object();

obj.prop = "setProp";
let getProp = obj.prop;

obj['prop'] = "setProp";
let getProp = obj['prop'];

// Object.defineProperty(obj, key, value);
Object.defineProperty(obj, 'prop', {
  value: "setProp",
  writable:true,
  configurable:true,
  enumerable:true
});

var defineProp = function ( obj, key, value ){
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty( obj, key, config );
};
  // To use, we then create a new empty "obj" object
  var obj = Object.create( Object.prototype );
  // Populate the object with properties
  defineProp( obj, "foo", "foo value" );
  defineProp( obj, "bar", 111 );
  defineProp( obj, "baz", false );

  console.log(obj);
  // Outputs: Object {foo: "foo value", bar: 111, baz: false}

// Set Multiple Properties
Object.defineProperties( newObject, {
  "someKey": {
    value: "Hello World",
    writable: true
  },
  "anotherKey": {
    value: "Foo bar",
    writable: false
  }
});

// Constructor
function Obj(foo, bar, baz){
  this.foo = foo;
  this.bar = bar;
  this.baz = baz;

  this.toString = function(){
    return this.foo + " and " + this.bar + " and " + this.baz;
  }
}
Obj.prototype.newMethod = function (){} // extends prototype of Obj
// Usage
let newObj = new Obj('foo', 'bar', 'baz');
