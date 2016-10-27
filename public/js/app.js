angular
.module("wdiRadio", [
  "ui.router",
  "firebase",
])
.config([
  "$stateProvider",
  RouterFunction
])
.controller("SongsIndexController", [
  "$firebaseArray",
  SongsIndexControllerFunction
])
.controller("SongsShowController", [
  "$stateParams",
  "$firebaseArray"
])

function RouterFunction($stateProvider) {
  $stateProvider
  .state("songsIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "SongsIndexController",
    controllerAs: "vm"
  })
  .state("songsShow", {
    url: "/songs/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "SongsIndexController",
    controllerAs: "vm"
  })
}
function SongsIndexControllerFunction($firebaseArray) {
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);

  this.create = function() {
    this.songs.$add(this.newSong).then( () => this.newSong = {} )
    console.log("hello"); //not printing
  }
}
function SongsShowControllerFunction($stateParams, $firebaseObject){
  let ref = firebase.database().ref().child("songs/" + $stateParams.id);
  $firebaseObject(ref).$loaded().then(song => {
    this.song = song
  })
  this.update = function(){
    this.song.$save();

  }
}
