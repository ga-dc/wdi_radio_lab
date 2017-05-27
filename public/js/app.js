
var app = angular.module("songs", ["ui.router", "firebase"])

app.config(["$stateProvider", RouterFunction])

function RouterFunction($stateProvider){
  $stateProvider
  .state("Welcome", {
    url: "",
    templateUrl: "ng-views/welcome.html"
  })
  .state("Songs", {
    url: "/songs",
    templateUrl: "ng-views/songs.html",
    controller: "SongsIndexController",
    controllerAs: "vm"
  })
}

app.controller("SongsIndexController", ["$firebaseArray", SongsIndexControllerFunction])

function SongsIndexControllerFunction($firebaseArray){
  let songData = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(songData)
}
