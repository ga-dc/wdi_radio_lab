"use strict";

angular
  .module("radioapp", [
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

function SongFactoryFunction($resource){
  return $resource("http://localhost:3000/songs/:id.json")
}

function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex", {
    url: "/",
    controller: "SongIndexController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/index.html"
  })
  .state("songShow", {
    url: "/songs/:id",
    controller: "SongShowController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/show.html"
  })
}

function SongIndexControllerFunction(SongFactory) {
  this.songs = SongFactory.query()
}

function SongShowControllerFunction(SongFactory, $stateParams) {
  this.song = SongFactory.get({id: $stateParams.id})
}
