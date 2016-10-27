angular
  .module("radioApp", [
    "firebase",
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("radioController", [
    "$firebaseArray",
    radioControllerFunction
  ])
  .controller("radioIndexController", [
    radioIndexControllerFunction
  ])

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("radioIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "radioIndexController",
      controllerAs: "vm"
    })
    .state("radioSong", {
      url: "songs/:id",
      templateUrl: "js/ng-views/show.html"
    })
  }

  function radioControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref)
  }

  function radioIndexControllerFunction() {
    this.songs = []
  }
