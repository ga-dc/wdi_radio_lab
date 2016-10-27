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
    "$firebaseArray",
    wdiRadioIndexControllerFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
    .state("wdiRadioIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "wdiRadioIndexController",
      controllerAs: "vm"
    })
  }

function wdiRadioIndexControllerFunction($firebaseArray){
  console.log("Hey This Works!")
}