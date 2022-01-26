require(["dojo/_base/customStore"], function( store ){

  // using dojo.setObject()
  store.setObject( "basket.core", (function() {

      var basket = [];

      function privateMethod() {
          console.log(basket);
      }

      return {
          publicMethod: function(){
                  privateMethod();
          }
      };

  })());

});
