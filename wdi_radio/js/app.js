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

  .controller("SongShowController", [
    "SongFactory",
    "$stateParams",
    SongShowControllerFunction
  ])



 function SongFactoryFunction( $resource ){
     return $resource( "http://localhost:3000/songs/:id" );
   }

  function SongIndexControllerFunction(SongFactory){
      this.songs = SongFactory.query();
     }

  function SongShowControllerFunction(SongFactory, $stateParams){
    this.song = SongFactory.get({id: $stateParams.id})
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

    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "SongShowController",
      controllerAs: "vm"
    })
  }
