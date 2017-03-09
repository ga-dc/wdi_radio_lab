angular
  .module("wdiRadioApp", [
    "ui-router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("wdiRadioController", [
    "$firebaseArray",
    WdiRadioControllerFunction
  ])

function RouterFunction($stateProvider){
  console.log('Router setup correctly')
  .state("songs", {
    url: "/:songs",
    controller: "wdiRadioController",
    controllerAs: "vm"
  });
}

function wdiRadioControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
}
