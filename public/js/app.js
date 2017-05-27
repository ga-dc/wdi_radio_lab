angular
  .module("radioLab", [
    "firebase", "ui.router", "songs"
  ])

  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("SongsIndexController", [
    "$firebaseArray",
    "$firebaseObject",
    SongsIndexControllerFunction
  ])
function RouterFunction($stateProvider){
  $stateProvider
  .state("index", {
    url: "/",
    templateUrl: "ng-views/index.html"
  })
  .state("songs", {
    url: "/songs",
    templateUrl: "ng-views/songs.html",
    controller: "SongsIndexController",
    controllerAs: "vm"
  })
}

function SongsIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs")
  $firebaseArray(ref).$loaded().then(function(songs){
    this.songs = songs;
    //create
    this.newSong = {};
    this.create = function() {
      this.songs.$add(this.newSong);
      this.newSong = {}
    }

    //update
    this.update = function(song) {
      this.toggleEdit(song);
      this.songs.$save(song)
    }

    //destroy
    this.destroy = function(song){
      this.toggleEdit(song);
      this.songs.$remove(song);
    }
  })

function SongsShowControllerFunction($stateParams, $firebaseObject) {
  let ref = firebase.database().ref().child("songs/ +" + $stateParams)
}

}
