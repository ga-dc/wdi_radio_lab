angular
  .module("wdiRadio", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("wdiRadioIndexController", [
    wdiRadioIndexController
  ])
  .controller("wdiRadioShowController", [
    "$firebaseArray",
    wdiRadioShowController
  ])


function RouterFunction($stateProvider){
  $stateProvider
    .state("wdiRadioIndex", {
      url: "/",
      templateUrl: "js/ng-views/index.html",
      controller: "wdiRadioIndexController",
      controllerAs: "vm"
    })
    .state("wdiRadioSongs", {
      url: "/songs",
      templateUrl: "js/ng-views/show.html",
      controller: "wdiRadioShowController",
      controllerAs: "vm"
    })
}

function wdiRadioIndexController(){
  console.log("Hey Mike! I'm the INDEX!")
}

function wdiRadioShowController($firebaseArray){
  console.log("I'm the SHOW!")
  let ref = firebase.database().ref().child("songs");
}