angular
  .module("wdiRadio", [
    "ui.router",
    "firebase",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("SongsIndexController", [
    "$firebaseArray",
    SongsIndexControllerFunction
  ])

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("Welcome", {
        url: "",
        templateUrl: "js/welcome.html"
      })
      .state("songs", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongsIndexController",
        controllerAs: "vm"
      })
  }

  function SongsIndexControllerFunction($firebaseArray) {
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);
  }
