angular
.module("radioApp", [
  "firebase",
  "ui.router"
   ])
.config([
  "$stateProvider",
  RouterFunction
])
.controller("RadioController",[
  "firebaseArray",
  RadioControllerFunction
])

.controller("RadioIndexController",[
  "$firebaseArray",
  RadioIndexControllerFunction
]);



function RouterFunction($stateProvider) {
  $stateProvider
  .state ("songsIndex", {
  url: "/songs",
  templateUrl: "js/ng-views/index.html",
  controller: "RadioIndexController",
  controllerAs: "vm"
});
}


function RadioControllerFunction($firebaseArray){

  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)
  console.log(this.songs)
  this.newSong = {}

}

function RadioIndexControllerFunction($firebaseArray){

  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)
  console.log(this.songs)
  this.newSong = {}

}
