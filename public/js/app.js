angular
  .module("wdiRadio", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("wdiRadioIndexController", [
    wdiRadioIndexController
  ])
  .controller("wdiRadioSongsIndexController", [
    "$firebaseArray",
    wdiRadioSongsIndexController
  ])

function RouterFunction($stateProvider){
  $stateProvider
    .state("wdiRadioIndex", {
      url: "/",
      templateUrl: "js/ng-views/index.html",
      controller: "wdiRadioIndexController",
      controllerAs: "vm"
    })
    .state("wdiRadioSongsIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/songs/index.html",
      controller: "wdiRadioSongsIndexController",
      controllerAs: "vm"
    })
}

function wdiRadioIndexController(){
  console.log("Hey Mike! I'm the INDEX/WELCOME!")
}

function wdiRadioSongsIndexController($firebaseArray){
  console.log("I'm the SONGS/INDEX!")
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);

  this.create = function(){
    this.songs.$add(this.newSong).then( () => this.newSong = {} )
  }

  // this.create = function () {
  //    this.songs.$add(this.newSong).then( () => this.newSong = {} )
  //  }
}