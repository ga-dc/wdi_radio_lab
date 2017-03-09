use strict;

angular
  .module("wdiRadioApp", ["ui.router", "firebase"])
  .config(["$stateProvider", RouterFunction])
  .controller("RadioHomeCtrl", [RadioHomeControllerFunction])
  .controller("RadioIndexCtrl", ["$firebaseArray", "RadioIndexControllerFunction"])
  .controller("RadioShowCtrl", ["$stateParams", "$firebaseObject", RadioShowControllerFunction])

function RouterFunction($stateProvider){
  $stateProvider
  .state("radioHome", {
    url: "/",
    templateUrl: "js/ng-views/home.html",
    controller: "RadioHomeCtrl",
    controllerAs: "vm"
  })
  .state("radioIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "RadioIndexCtrl",
    controllerAs: "vm"
  })
  .state("radioShow", {
    url: "/songs/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "RadioShowCtrl",
    controllerAs: "vm"
  })
}

function RadioIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)
}

function RadioShowControllerFunction($stateParams, $firebaseObject){
  let ref = firebase.database().ref().child("songs/" + $stateParams.id)

}
