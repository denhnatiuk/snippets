var module = {
  propStatic : "someValue",

  propObj : {
    useObjProp: true,
    otherObjProp: "someOtherValue"
  },
  saySomething: function () {
    console.log( "a very basic method" );
  },
  reportMyConfig: function () {
    console.log( "a value based output is: " + ( this.propObj.useObjProp ? true : false) );
  },
  // override the current configuration
  updateObjProp: function( newObjProp ) {
    if ( typeof newObjProp === "object" ) {
      this.propObj = newObjProp;
      console.log( this.propObj.otherObjProp );
    }
  }
};
