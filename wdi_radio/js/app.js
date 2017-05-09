angular
  .module("wdiRadio", [
    "ui.router",
    "ngResource"
  ])

  .config([
    "$stateProvider",
    RouterFunction
  ])

  .factory( "SongFactory", [
  "$resource",
   SongFactoryFunction
 ]);

 function SongFactoryFunction( $resource ){
     return $resource( "http://localhost:3000/songs/:id" );
   }

  function RouterFunction($stateProvider){
    $stateProvider
    .state("radioWelcome", {
      url: "/",
      templateUrl: "wdi_radio/index.html",
      controller: "RadioWelcomeController",
      controllerAs: "vm"
    })

    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "songIndexController",
      controllerAs: "vm"

    })
  }
