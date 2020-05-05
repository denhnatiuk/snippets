// create namespace
Ext.namespace("myNameSpace");

// create application
myNameSpace.app = function () {

  // do NOT access DOM from here; elements don't exist yet

  // private variables
  var btn1,
      privVar1 = 11;

  // private functions
  var btn1Handler = function ( button, event ) {
      console.log( "privVar1=" + privVar1 );
      console.log( "this.btn1Text=" + this.btn1Text );
    };

  // public space
  return {
    // public properties, e.g. strings to translate
    btn1Text: "Button 1",

    // public methods
    init: function () {

      if ( Ext.Ext2 ) {

        btn1 = new Ext.Button({
          renderTo: "btn1-ct",
          text: this.btn1Text,
          handler: btn1Handler
        });

      } else {

        btn1 = new Ext.Button( "btn1-ct", {
          text: this.btn1Text,
          handler: btn1Handler
        });

      }
    }
  };
}();
