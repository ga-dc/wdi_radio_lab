"use strict"
(function() {
  angular
  .module("wdiRadio", [
    "ui.router",
    "firebase",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("SongIndexController", [
    "$firebaseArray",
    SongIndexControllerFunction
  ])
  .controller("SongShowController", [
    "$stateParams",
    "$firebaseObject",
    SongShowControllerFunction
  ])

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("Welcome", {
      url: "/",
      templateUrl: "js/welcome.html"
    })
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "vm"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "SongShowController",
      controllerAs: "vm"
    });
  }

  function SongIndexControllerFunction($firebaseArray) {
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);
  }

  function SongShowControllerFunction($stateParams, $firebaseObject) {
    let ref = firebase.database().ref().child("songs/" + $stateParams.id);
  }


}());
