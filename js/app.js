angular.module("wdiradio", [
  "ui.router",
  "firebase"
])
.config([
  "$stateProvider",
  Router
])
.controller("SongIndexController", [
  "$firebaseArray",
  SongIndexControllerFunction
])

function SongIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)
  console.log(this.songs)

  this.create = function(){
    this.songs.$add(this.newSong).then(()=>this.newSong)
  }
}

function Router($stateProvider){
  $stateProvider
  .state("songIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "SongIndexController",
    controllerAs: "vm"
  })
}
