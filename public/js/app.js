angular
  .module("wdiradio", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("WelcomeController", [
    WelcomeControllerFunction
  ])
  .controller("SongsController", [
    // "$stateParams",
    // "$state",
    "$firebaseArray",
    SongsControllerFunction
  ])

function RouterFunction($stateProvider) {
  $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "js/ng-views/welcome.html",
      controller: "WelcomeController",
      controllerAs: "vm"
    })
    .state("songs", {
      url: "songs",
      templateUrl: "js/ng-views/songs.html",
      controller: "SongsController",
      controllerAs: "vm"
    })
}

function WelcomeControllerFunction() {

}

function SongsControllerFunction($firebaseArray) {
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
}
