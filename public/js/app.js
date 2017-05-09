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
  .factory("SongFactory", [
    "$resource",
    SongFactoryFunction
  ])
  .controller("SongIndexController", [
    "SongFactory",
    SongIndexControllerFunction
  ])
  .controller("SongShowController", [
    "SongFactory",
    "$stateParams",
    SongShowControllerFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "SongIndexController",
    controllerAs: "vm"
  })
}

function SongIndexControllerFunction(SongFactory){
  this.songs = SongFactory.query();
  console.log(this.songs)
}

function SongShowControllerFunction(SongFactory, $stateParams){
  this.song = SongFactory.get({id: $stateParams.id});
}

function SongFactoryFunction($resource){
  return $resource("http://localhost:3000/songs/:id.json")
}
