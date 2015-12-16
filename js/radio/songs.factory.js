(function(){
  angular
    .module( "radio" )
    .factory( "SongsFactory", [
      "$resource",
      FactoryFunction
    ]);

    function FactoryFunction( $resource ){
      return $resource( "http://localhost:3000/songs/:id", {}, {
      	update: { method: "PUT" }
      });
    }
}());