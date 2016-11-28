var app = angular.module("songs", ["ui.router", "firebase"])
app.config(["$stateProvider", RouterFunction])

app.controller("SongsIndexController", ["$firebaseArray", SongsIndexControllerFunction])

function RouterFunction($stateProvider){
  $stateProvider
  .state("welcome", {
    url: "",
    templateUrl: "ng-views/welcome.html"
  })
  .state("songs", {
    url: "/songs",
    templateUrl: "ng-views/songs",
    controller: "SongsIndexController",
    controllerAs: "vm"
  })
}
function SongsIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  //Read
  this.songs = $firebaseArray(ref);
  //Create
  this.newSong = {visible: false}
  this.create = function(){
    this.songs.$add(this.newSong).then(() => this.newSong = {visible: false})
  }
  //Delete
  this.delete = function(grumble){
    this.grumbles.$remove(grumble)
  }
  //DOM Manipulation
  this.toggleNew = function(){
    this.newSong.visible = !(this.newSong.visible)
  }
}
