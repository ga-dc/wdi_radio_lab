"use strict";


angular
  .module("radio", [
    "ui.router",
    "firebase",
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

function RouterFunction($stateProvider){
  $stateProvider
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

function SongIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);

  this.create = function(){
    this.$add(this.newSong).then( () => this.newSong = {} )
  }
}
  function SongShowControllerFunction($stateParams, $firebaseObject){
      // This time, ref contains a reference to a specific grumble.
      let ref = firebase.database().ref().child("songs/" + $stateParams.id);

      // Then we retrieve a $firebaseObject based on ref. Once that asynchronous action is done, we save the resulting grumble to `vm.grumble`.
      $firebaseObject(ref).$loaded().then( song => this.song = song )

      this.update = function(){
        this.song.$save();
      }

      this.delete = function(song){
        this.song.$remove(song);
      }
  }
