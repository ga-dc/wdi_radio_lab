angular
  .module("wdiRadioApp", [
    "firebase",
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("wdiRadioIndexController", [
    "$firebaseArray",
    wdiRadioIndexControllerFunction
  ])

function wdiRadioIndexControllerFunction($firebaseArray){

  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref)

}
function RouterFunction($stateProvider){
  $stateProvider
  .state("wdiRadioWelcome", {
    url: "/",
    templateUrl: "/welcome.html"

  })
  .state("wdiRadioIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "wdiRadioIndexController",
    controllerAs: "vm"
  })
  

}
