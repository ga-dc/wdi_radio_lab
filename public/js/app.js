"use strict";

angular
  .module("wdi_radio", [
    "ui.router",
    "firebase"
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
  ]);

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
      controller: "SongIndexController",
      controllerAs: "vm"
    })
    .state("songEdit", {
      url: "/songs/:id/edit",
      templateUrl: "js/ng-views/edit.html",
      controller: "SongShowController",
      controllerAs: "vm"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "SongShowController",
      controllerAs: "vm"
    });
  }

  function SongIndexControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);

    this.create = function(){
      this.songs.$add(this.newSong).then( () => this.newSong = {} );
    };
  }

  function SongShowControllerFunction($stateParams, $firebaseObject){
    let ref = firebase.database().ref().child("songs/" + $stateParams.id);
    $firebaseObject(ref).$loaded().then(song => this.song = song);

    this.delete = function(song){
      this.song.$remove(song);
    };

    this.update = function(){
      this.song.$save();
    };
  }
