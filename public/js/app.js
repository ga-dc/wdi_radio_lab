angular
  .module("radio", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .controller("SongIndexCtrl", [
    "$firebaseArray",
    songController
  ])

  function songController($firebaseArray){
    let ref = firebase.database().ref().child("songs")
    this.songs = $firebaseArray(ref)
  }

  function Router($stateProvider){
    $stateProvider
    .state("songIndex",{
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "SongIndexCtrl",
      controllerAs: "vm"
    })
  }
