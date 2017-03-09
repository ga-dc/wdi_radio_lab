angular
  .module("radio", [
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
  .controller("SongIndexController", [
    "$firebaseArray",
    SongIndexControllerFunction
  ])

function RouterFunction($stateProvider) {
  $stateProvider
  .state("welcome", {
    url: "/",
    templateUrl: "js/ng-views/welcome.html",
    controller: "WelcomeController",
    controllerAs: "vm"
  })
  .state("songIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "SongIndexController",
    controllerAs: "vm"
  })
}

function WelcomeControllerFunction() {
}

function SongIndexControllerFunction($firebaseArray) {
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)

  this.create = function() {
    this.songs.$add(this.newSong).then(() => this.newSong = {})
  }

  this.update = function(song) {
    this.songs.$save(song)
  }

  this.delete = function(song) {
    this.songs.$remove(song)
  }
}
