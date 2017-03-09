angular
  .module("wdiRadio", [
    "firebase",
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("SongsIndexController", [
    "$firebaseArray",
    SongsIndexControllerFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
  .state("songsIndex", {
    url: "/songs",
    templateUrl: "../ng-views/index.html",
    controller: "SongsIndexController",
    controllerAs: "vm"
  })
}

function SongsIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
}
