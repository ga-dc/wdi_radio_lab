angular
.module("radioApp", [
  "ui.router",
  "firebase"
   ])
.config([
  "$stateProvider",
  RouterFunction
])

.controller("RadioIndexController",[
  "$firebaseArray",
  RadioIndexControllerFunction
])


function RouterFunction($stateProvider) {
  $stateProvider
  .state ("songsIndex", {
  url: "/songs",
  templateUrl: "js/ng-views/index.html",
  controller: "RadioIndexController",
  controllerAs: "vm"
})

}


function RadioIndexControllerFunction($firebaseArray){

  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)
  console.log(this.songs)
  this.newSong = {}

  this.create = function(){
    this.songs.$add(this.newSong).then( () => this.newSong = {} )
  }

  this.update = function(song){
    this.songs.$save(song)
  }

  this.delete = function(song){
    this.songs.$remove(song)
  }
}
