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
 ])

 .controller( "SongIndexController", [
    "SongFactory",
    SongIndexControllerFunction
  ])

  function SongIndexControllerFunction( SongFactory ){
      this.songs = SongFactory.query();
    }

 function SongFactoryFunction( $resource ){
     return $resource( "http://localhost:3000/songs/:id.json" );
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
      controller: "SongIndexController",
      controllerAs: "vm"

    })
  }
