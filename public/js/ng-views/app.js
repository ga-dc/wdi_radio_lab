"use strict";


angular
  .module("radio", [
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
  .controller("SongNewController", [
  "SongFactory",
  "$state",
  SongNewControllerFunction
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

function SongIndexControllerFunction( SongFactory ) {
this.songs = SongFactory.query()
}

function SongNewControllerFunction( SongFactory, $state ) {
  this.song = new SongFactory()
  this.create = function() {
    this.song.$save(function(song) {
      $state.go("songShow", {id: song.id})
    })
  }
}

function SongShowControllerFunction( SongFactory, $stateParams ) {
  this.song = SongFactory.get({id: $stateParams.id})
  console.log(this.song)
}
this.destroy = function(){
  this.song.$delete({id: $stateParams.id}, function() {
    $state.go("songIndex")
  })
}
}
