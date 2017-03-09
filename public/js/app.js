

angular
  .module("radioApp", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("RadioIndexController", [
    "$firebaseArray",
    RadioIndexControllerFunction
  ])

function RouterFunction($stateProvider) {
  $stateProvider
    .state("radioIndex", {
      url: "/radio",
      templateUrl: "js/ng-views/index.html",
      controller: "RadioIndexController",
      controllerAs: "vm"
    })
}

function RadioIndexControllerFunction($firebaseArray) {
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
  this.newSong = {}

  this.addSong = function() {
    this.songs.$add(this.newSong).then( () => this.newSong = {} )
  }
}
