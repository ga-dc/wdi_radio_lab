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

  this.add = function(){
    this.songs.$add(this.newSong).then( () => this.newSong = {})
  }

  this.delete = function(song){
    this.songs.$remove(song)
  }

  this.update = function(song){
    this.songs.$save(song)
  }
}
