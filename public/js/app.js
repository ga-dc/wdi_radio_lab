angular
  .module("wdiRadio", [
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
  .controller("SongsNewController", [
    "$firebaseArray",
    SongsNewControllerFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
      .state("Intro", {
        url: "",
        templateUrl: "js/ng-views/intro.html"
      })
      .state("Index", {
        url: "/songs",
        templateUrl: "js/ng-views/index.html",
        controller: "SongsIndexController",
        controllerAs: "vm"
      })
      .state("New", {
        url: "/songs/new",
        templateUrl: "js/ng-views/new.html",
        controller: "SongsNewController",
        controllerAs: "vm"
      })

  }

  function SongsIndexControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);
  }

  function SongsNewControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);
    this.create = function(){
      this.songs.$add(this.newSong).then( () => this.newSong = {})
    }
  }
