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
    console.log("update!")
    this.songs.$save(song)
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
    // .state("songShow", {
    //   url: "/songs/:id",
    //   templateUrl: "js/ng-views/show.html",
    //   controller: "SongShowController",
    //   ControllerAs: "vm"
    // })
  }
