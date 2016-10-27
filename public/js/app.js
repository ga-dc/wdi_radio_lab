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

function wdiRadioIndexControllerFunction($firebaseArray){
  this.newSong = {}
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref)
  this.create = function(){
    this.songs.$add(this.newSong).then( () => this.newSong = {} )
  }
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
  // .state("wdiRadioNew", {
  //   url: "/songs/new",
  //   templateUrl: "js/ng-views/new.html"
  // })


}
