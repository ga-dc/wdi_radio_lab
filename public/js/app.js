angular
.module("wdi_radio", ["ui.router", "firebase"])
.config(["$stateProvider", RouterFunction])
.controller("SongIndexController", ["$firebaseArray", SongIndexControllerFunction])
// .controller("SongNewController", ["$firebaseArray", SongNewControllerFunction])

function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "SongIndexController",
    controllerAs: "vm"
  // }).state("songNew", {
  //   url: "/songs/new",
  //   templateUrl: "js/ng-views/new.html",
  //   controller: "SongNewController",
  //   controllerAs: "vm"
  // })
});
}

function SongIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);

  this.create = function() {
    this.songs.$add(this.newSong).then(()=> this.newSong = {})

  }

  this.update = function(song){
    this.songs.$save(song)
  }
}
//
// function SongNewControllerFunction($firebaseArray){
//   this.create = function() {
//     this.songs.$add(this.newSong).then(()=> this.newSong = {})
//
//   }
// }
