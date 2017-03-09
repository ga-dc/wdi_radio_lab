angular
  .module("wdiradio", [
    "firebase",
    "ui.router",
    "ngAudio"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("yourController",function($scope,ngAudio){
    $scope.sound = ngAudio.load("sounds/mySound.mp3"); // returns NgAudioObject
}) 
  .controller("WdiradioController", [
    "$firebaseArray",
    WdiradioControllerFunction
  ])
  .controller("WdiradioIndexController", [
    "$firebaseArray",
    WdiradioIndexControllerFunction
  ])
  .controller("WdiradioShowController", [
    "$firebaseArray",
    "$stateParams",
    WdiradioShowControllerFunction
  ])


  function RouterFunction($stateProvider) {
    $stateProvider
    .state("welcome", {
      url: "/wdiradio",
      templateUrl: "js/ng-views/welcome.html"
    })
    .state("wdiradioIndex", {
      url: "/wdiradio/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "WdiradioIndexController",
      controllerAs: "vm"
    })
    .state("wdiradioShow", {
      url: "/wdiradio/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "WdiradioShowController",
      controllerAs: "vm"
    })
  }

function WdiradioControllerFunction($firebaseArray) {
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);

}

function WdiradioIndexControllerFunction($firebaseArray) {
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
}

function WdiradioShowControllerFunction($firebaseArray, $stateParams) {
  let ref = firebase.database().ref().child("songs").get({id: $stateParams.id});
  this.song = $firebaseArray(ref)
}
