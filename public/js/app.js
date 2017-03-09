angular
.module("wdiradio", ["ui.router", "firebase"])
.config(["$stateProvider", RouterFunction])
.controller("SongIndexController", ["$firebaseArray", SongIndexControllerFunction])

function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "SongIndexController",
    controllerAs: "vm"
  })
}

function SongIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)
}

this.update = function(song){
  this.songs.$save(song)
}

this.create = function(){
  this.songs.$add(this.newSong).then(() => this.newSong = {})
}

this.destroy = function(song){
  this.songs.$remove(song)
}
