angular.module("wdiradio", [
  "ui.router",
  "firebase"
])
.config([
  "$stateProvider",
  Router,
])
.controller("SongIndexController", [
  "$firebaseArray",
  "$firebaseObject",
  SongIndexControllerFunction
])
// .controller("SongShowController",[
//     "$stateParams",
//     "$firebaseObject",
//     SongShowControllerFunction
// ])


function SongIndexControllerFunction($firebaseArray, $firebaseObject){
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)
  this.newTodo = {}

  this.create = function(){
    this.songs.$add(this.newSong).then(()=>this.newSong = {})
  }

  this.update = function(song){
    this.songs.$save(song)
  }

  this.delete = function(song){
    this.songs.$remove(song);
    console.log("delete successful")
  }

}

function NewSongShow(){
  if (menuShow = true){
    menuShow = false
  }
  else{
  menuShow = true
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
    .state("songNew", {
      url: "/songs/new",
      templateUrl: "js/ng-views/new.html",
      controller: "SongIndexController",
      controllerAs: "vm"
    })
  }
