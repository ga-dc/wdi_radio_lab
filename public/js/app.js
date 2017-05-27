angular
  .module("radio", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("SongIndexController", [
    "$firebaseArray",
    SongIndexControllerFunction
  ])
  .controller("SongShowController", [
    "$stateParams",
    "$firebaseObject",
    SongShowControllerFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "SongIndexController",
      controllerAs: "indexVm"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "public/js/ng-views/show.html",
      controller: "SongShowController",
      controllerAs: "showVm"
    })
  }

  function SongIndexControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);
    this.create = function() {
      this.songs.$add(this.newSong).then(()=>this.newSong = {})
    }
    this.delete = function(song){
      this.song.$remove(song)
    }
  }

  function SongShowControllerFunction($stateParams, $firebaseObject) {
    let ref = firebase.database().ref().child("songs/ +" + $stateParams)
  }
