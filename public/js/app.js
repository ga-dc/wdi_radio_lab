angular
  .module("wdiRadioApp", [
    "firebase",
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("wdiRadioIndexController", [
    "$firebaseArray",
    wdiRadioIndexControllerFunction

  ])
  .controller("wdiRadioShowController", [
    "$stateParams",
    "$firebaseObject",
    wdiRadioShowControllerFunction
  ])
function wdiRadioShowControllerFunction($stateParams, $firebaseObject){
  let ref = firebase.database().ref().child("songs/" + $stateParams.id)
  $firebaseObject(ref).$loaded().then(song => this.song = song)
}
function wdiRadioIndexControllerFunction($firebaseArray){
  this.newSong = {}
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref)
  this.create = function(){
    this.songs.$add(this.newSong).then( () => this.newSong = {} )
  }
  this.update = function (song){  // update works, but the values of newly added songs do not work.
    this.songs.$save(song)
    this.editBar = false;
  }
  this.delete = function (song){
    this.songs.$remove(song)
  }
  // this.playSound = function(){
  //   var audio = new Audio('{{song.audio_url}}')
  //   audio.play();
  // }
}
function RouterFunction($stateProvider){
  $stateProvider
  .state("wdiRadioWelcome", {
    url: "/",
    templateUrl: "/welcome.html"

  })
  .state("wdiRadioIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "wdiRadioIndexController",
    controllerAs: "vm"
  })
  .state("wdiRadioShow", {
    url: "/songs/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "wdiRadioShowController",
    controllerAs: "vm"
  })
  // .state("wdiRadioNew", {
  //   url: "/songs/new",
  //   templateUrl: "js/ng-views/new.html"
  // })


}
