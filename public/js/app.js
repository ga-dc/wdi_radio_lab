angular
  .module("WDIRadio", [
    "ui.router",
    "ngResource",
    "firebase"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .controller("HomeController", [
    "$state",
    HomeControllerFunction
  ])
  .controller("SongIndexController", [
    "$firebaseArray",
    SongIndexControllerFunction
  ])

function HomeControllerFunction($state) {

}

function SongIndexControllerFunction($firebaseArray) {
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)
  this.newSong = {}
  this.playSong = function(song) {

  }
  this.addNewSong = function() {
    this.songs.$add(this.newSong).then( () => this.newSong = {})
    this.toggleNewForm()
  }
  this.toggleNewForm = () => {
    $('.new-song-form').toggle()
  }
}





function Router($stateProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "js/ng-views/home.html",
      controller: "HomeController",
      controllerAs: "vm"
    })
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "SongIndexController",
      controllerAs: "vm"
    })
}
