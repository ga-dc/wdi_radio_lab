angular
  .module("wdiradio",[
    "ui.router",
    "firebase"

  ])
  .config(["$stateProvider", RoutingFunction])

  .controller("SongsController", [
    "$firebaseArray",
    SongsControllerFunction])

    function RoutingFunction($stateProvider){

      $stateProvider
        .state("Opening", {
          url: "",
          templateUrl: "js/ng-views/index.html"
        })
        .state("Index", {
          url: "/songs",
          templateUrl: "js/ng-views/songsindex.html",
          controller: "SongsController",
          controllerAs: "vm"
        })
    }


function SongsControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
}
