"use strict";


angular
  .module("GreatSong", [
    "ui.router",
    "ngResource"

  ])

  .config([
    "$stateProvider",
    RouterFunction
  ])

   .factory( "GreatSongFactory", [
         "$resource",
        GreatSongFactoryFunction
      ])


  .controller("GreatSongIndexController", [
    "GreatSongFactory",
    GreatSongIndexControllerFunction
])

.controller("GreatSongShowController", [
    "GreatSongFactory",
    "$stateParams",
    GreatSongShowControllerFunction
  ]);

  // function GreatSongShowControllerFunction(GreatSongFactory, $stateParams){
  //   this.grumble = GreatSongFactory.get({id: $stateParams.id});

function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "GreatSongIndexController",
    controllerAs: "vm"
  })


.state("songShow", {
    url: "/songs/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "GreatSongShowController",
    controllerAs: "vm"
  })
}

function GreatSongFactoryFunction($resource){
  return $resource("http://localhost:3000/songs/:id.json")
}

function GreatSongIndexControllerFunction(GreatSongFactory){
  this.songs = GreatSongFactory.query();
}

function GreatSongShowControllerFunction(GreatSongFactory, $stateParams) {
  this.song = GreatSongFactory.get({id: $stateParams.id})
}
