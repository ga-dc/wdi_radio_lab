"use strict"

angular
   .module("wdiRadio", ["ui.router", "firebase"])
   .config(["$stateProvider", RouterFunction])
   .controller("SongIndexController", ["$firebaseArray", SongIndexControllerFunction])
   .controller("SongShowController", ["$stateParams","$firebaseObject", SongShowControllerFunction])


function RouterFunction($stateProvider){
  $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
    $stateProvider
      .state("songShow", {
        url: "/songs/:id",
        templateUrl: "js/ng-views/show.html",
        controller: "SongShowController",
        controllerAs: "SongShowViewModel"
})
}

  function SongIndexControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);
  }
  function SongShowControllerFunction($stateParams, $firebaseObject){
    let ref = firebase.database().ref().child("songs/" + $stateParams.id)
    $firebaseObject(ref).$loaded().then( song => this.song = song)
}
