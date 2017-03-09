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
  .controller("SongsShowController", [
    "$firebaseObject",
    "$stateParams",
    SongsShowControllerFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
  .state("songsIndex", {
    url: "/songs",
    templateUrl: "../ng-views/index.html",
    controller: "SongsIndexController",
    controllerAs: "vm"
  })
  .state("songsShow", {
    url: "/songs/:id",
    templateUrl: "../ng-views/show.html",
    controller: "SongsShowController",
    controllerAs: "vm"
  })
}

function SongsIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
}

function SongsShowControllerFunction($firebaseObject, $stateParams){
  let ref = firebase.database().ref().child("songs/" + $stateParams.id);
  $firebaseObject(ref).$loaded().then(song => this.song = song);
}
