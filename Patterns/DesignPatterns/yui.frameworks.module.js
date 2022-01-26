Y.namespace( "store.basket" ) ;
Y.store.basket = (function () {

    var myPrivateVar, myPrivateMethod;

    // private variables:
    myPrivateVar = "I can be accessed only within Y.store.basket.";

    // private method:
    myPrivateMethod = function () {
        Y.log( "I can be accessed only from within YAHOO.store.basket" );
    }

    return {
        myPublicProperty: "I'm a public property.",

        myPublicMethod: function () {
            Y.log( "I'm a public method." );

            // Within basket, I can access "private" vars and methods:
            Y.log( myPrivateVar );
            Y.log( myPrivateMethod() );

            // The native scope of myPublicMethod is store so we can
            // access public members using "this":
            Y.log( this.myPublicProperty );
        }
    };

})();
