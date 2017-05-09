angular
  .module("wdiradio", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("SongsIndexController", [
    "$firebaseArray",
    SongsIndexControllerFunction
  ])
  .controller("SongsShowController", [
    "$stateParams",
    "$firebaseObject",
    SongsShowControllerFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
      .state("songIndex", {
        url: "/songs",
        templateUrl: "js/ng-views/index.html",
        controller: "SongIndexController",
        controllerAs: "vm"
      })
      .state("songShow", {
        url: "/songs/:id",
        templateUrl: "js/ng-views/show.html",
        controller: "SongShowController",
        controllerAs: "vm"
      })
  }

  function SongIndexControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("songs")
    this.songs = $firebaseArray(ref)
  }

  function SongShowControllerFunction($stateParams, $firebaseObject){
    let ref = firebase.database().ref().child("songs/" + $stateParams.id)
    $firebaseObject(ref).$loaded().then(song => this.song = song)
  }
