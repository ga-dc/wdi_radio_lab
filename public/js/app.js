"use strict";

(function(){

angular
  .module("wdiRadioDom", ["ui.router", "firebase"])
  .config(["$stateProvider", RouterFunction])
  .controller("SongsIndexController", ["$firebaseArray", SongsIndexControllerFunction])
  .controller("SongsShowController", ["$stateParams", "$firebaseObject", SongsShowControllerFunction])


function RouterFunction($stateProvider) {
  $stateProvider
    .state("home", {
      url: "",
      templateUrl: "js/ng-views/home.html"
    })
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "SongsIndexController",
      controllerAs: "access"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "SongsShowController",
      controllerAs: "access"
    })
}

})();


// Add Function for INDEX, SHOW, NEW, EDIT controllers

function SongsIndexControllerFunction($firebaseArray) {
  console.log("Index?");

  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);

}

function SongsShowControllerFunction($stateParams, $firebaseObject) {
  console.log("Show me a song");
  let ref = firebase.database().ref().child("songs/" + $stateParams.id);

    $firebaseObject(ref).$loaded().then(song => this.song = song)
  // let something??

}
