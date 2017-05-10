"use strict";

angular
  .module("Song", [
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
  .controller("SongNewController", [
    "SongFactory",
    SongNewControllerFunction
  ])


function SongFactoryFunction($resource) {
  return $resource("http://localhost:3000/songs/:id.json")
}

function RouterFunction($stateProvider) {
  $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "SongIndexController",
      controllerAs: "vm"
    })
    .state("songNew", {
      url: "/songs/new",
      templateUrl: "js/ng-views/new.html",
      controller: "SongNewController",
      controllerAs: "vm"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "SongShowController",
      controllerAs: "vm"
    })

}

function SongIndexControllerFunction(SongFactory) {
  this.songs = SongFactory.query();
}

function SongShowControllerFunction(SongFactory, $stateParams) {
  this.song = SongFactory.get({
    id: $stateParams.id
  })
}

function SongNewControllerFunction(SongFactory) {
  this.song = new SongFactory();
  this.create = function() {
    this.song.$save()
  }
}
