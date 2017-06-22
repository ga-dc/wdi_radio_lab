"use strict";

angular
  .module("wdiradio", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller( "SongIndexController", [
      "SongFactory",
      SongIndexControllerFunction
    ])
  .factory( "SongFactory", [
    "$resource",
    SongFactoryFunction
  ])

function RouterFunction ($stateProvider) {
  $stateProvider
  .state("songIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "SongIndexController",
    controllerAs: "vm"
  });
}

function SongFactoryFunction( $resource ){
  return $resource( "http://localhost:3000/songs/:id.json" );
}

function SongIndexControllerFunction( SongFactory ){
  this.songs = SongFactory.query();
}
