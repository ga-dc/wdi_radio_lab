angular
  .module("wrongsongs", [
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

function RouterFunction($stateProvider){
  $stateProvider
    .state("radioWelcome", {
      url: "/",
      templateUrl: "js/ng-views/welcome.html",
    })
    .state("radioIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "RadioIndexController",
      controllerAs: "vm"
    })
}

function RadioIndexControllerFunction($firebaseArray){
  console.log("whats up");
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);

  this.create = function(){
    this.songs.$add(this.newSong).then( () => this.newSong = {} )

  this.delete = function(song){
    this.songs.$remove(song)
  }
  }
}
