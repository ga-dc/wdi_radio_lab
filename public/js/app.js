angular
.module("radioApp", [
  "firebase", "ui.router"
])
.config(["$stateProvider",
  RouterFunction
])
.controller("SongController", [
  "$firebaseArray",
  SongControllerFunction
])

function RouterFunction($stateProvider){
  $stateProvider
  .state("home", {
    url: '/',
    templateUrl: 'js/ng-views/home.html',
  })
  .state("songs", {
    url: '/songs',
    templateUrl: 'js/ng-views/songs.html',
    controller: 'SongController',
    controllerAs: 'vm'
  })
}

function SongControllerFunction($firebaseArray) {
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)
}
