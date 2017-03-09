angular
.module("RadioApp", [
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
// .controller("SongShowCtrl", [
//   "$stateParams",
//   "$firebaseObject",
//   SongShowControllerFunction
// ])

function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex",{
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "SongIndexController",
    controllerAs: "vm"
  })
  .state("songShow",{
    url: "/songs/:id",
    tmeplateUrl: "js/ng-views/show.html",
    controller: "SongShowController",
    controllerAs: "vm"
  })
}

function SongIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
  //
  this.create = function(){
    this.songs.$add(this.newSong).then( () => this.newSong = {} )
  }
  this.update = function (song) {
    this.songs.$save(song)
  }
  this.delete = function(song){
    this.songs.$remove(song);
  }
}
