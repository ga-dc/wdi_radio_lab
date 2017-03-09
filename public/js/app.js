angular
.module("wdiRadioApp", [
  "ui.router",
  "firebase"])
  .config([
    "$stateProvider",
    RouterFunction
  ])
.controller("WdiRadioIndexController", [
  "$firebaseArray",
  WdiRadioIndexController
]).controller("WdiRadioWelcomeController", [
  "$firebaseArray",
  WdiRadioWelcomeController
])
;

function RouterFunction($stateProvider){
  $stateProvider
  .state("WdiRadioIndex",{
    url:"/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "WdiRadioIndexController",
    controllerAs: "vm"
  })
  .state("WdiRadioWelcome", {
    url: "/",
    templateUrl: "js/ng-views/welcome.html",
    controller: "WdiRadioWelcomeController",
    controllerAs: "vm"
  })
}

function WdiRadioIndexController($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
  console.log("hi")
}

function WdiRadioWelcomeController($firebaseArray){
  // this.songs = firebase.database().ref().child("songs");
  // this.songs = $firebaseArray(ref);
  console.log("hi")
}
