var gallery = [];
var galleryItem = "gallery" + year + item + ext;


var count = 20, //count of gallery items
    item = Math.floor(Math.random() * count) + 1 ,
    // ext  = /\.(jpe?g|png|gif)$/;

var img = "<img src='/images/gallery/gallery" + item + ".jpg' class='img img-responsive'>";

$(data).find("a").attr("href", function (i, val) {
  if( val.match() ) {
    for (var i=0; i<6; i++){
      $("#galleryContent").append( "<img src='"+ folder + val +"'>" );
    }
  }
});

// var parent = document.getElementById("galleryContent");
// var box = document.createElement('div');
// var img = document.createElement('img');
// box.className = "col-xs-12 col-sm-6 col-md-4 col-lg-4";
// img.className = "img img-responsive";
// box.appendChild(img);
// parent.appendChild(box);
