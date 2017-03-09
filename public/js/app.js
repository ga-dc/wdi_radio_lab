angular
  .module("WdiRadio", [
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

  function RouterFunction($stateProvider){
    $stateProvider
    .state("WdiRadioIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "WdiRadioIndexController",
      controllerAs: "vm"
    })
  }

function WdiRadioIndexControllerFunction ($firebaseArray) {
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)

}
