angular
  .module("wdiRadioApp", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("WdiRadioIndexController", [
    "$firebaseArray",
    WdiRadioIndexControllerFunction
  ])
  .controller("WdiRadioShowController", [
    "$stateParams",
    "$firebaseObject",
    WdiRadioShowControllerFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
  .state("ahoy", {
    url: "",
    templateUrl: "js/ahoy.html"
  })
  .state("songIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "WdiRadioIndexController",
    controllerAs: "WdiRadioIndexViewModel"
  })
  .state("songShow", {
    url: "/songs/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "WdiRadioShowController",
    controllerAs: "WdiRadioShowViewModel"
  });
}

function WdiRadioIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
}

function WdiRadioShowControllerFunction($stateParams, $firebaseObject){
  let ref = firebase.database().ref().child("songs/" + $stateParams.id);
  $firebaseObject(ref).$loaded().then( song => this.song = song )
}
