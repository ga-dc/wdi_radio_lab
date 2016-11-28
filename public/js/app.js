//app.js
angular.module("wdiradio", [
  "ui.router",
  "firebase"
])
  .config([
    "$stateProvider",
    RouterFunction
  ])
.controller("SongIndexController", [SongIndexControllerFunc])
.controller("SongShowController", ["$firebaseArray", SongShowControllerFunc])

function SongIndexControllerFunc(){

}

function SongShowControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)
  this.newSong = {}


this.create = function(){
  this.songs.$add(this.newSong).then(() => this.newSong ={} )
}

this.delete = function(song){
  this.songs.$remove(song)
  }
}
function RouterFunction($stateProvider) {
  $stateProvider
  .state("songIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "SongIndexController",
    controllerAs: "vm"
)}

  .state("songShow", {
    url: "/songs",
    templateUrl: "js/ng-views/show.html",
    controller: "SongShowController",
    controllerAs: "vm"
  })
})
