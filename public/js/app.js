"use strict";

angular
  .module("radioapp", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "stateProvider",
    RouterFunction
  ])
  .factory("SongFactory", [
    "resource",
    SongFactoryFunction
  ])
  .controller("SongIndexController", [
    "SongFactory",
    SongIndexControllerFunction
  ])
  .controller("SongShowController", [
    "$stateParams",
    "SongFactory",
    SongShowControllerFunction
  ])



function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex", {
    url: "/",
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

function SongFactoryFunction($resource){
  return $resource("http://localhost:3000/songs/:id.json")
}

function SongIndexControllerFunction() {
  this.songs = SongFactory.query()
}

function SongShowControllerFunction() {
  this.song = SongFactory.get({id: $stateParams.id})
}
