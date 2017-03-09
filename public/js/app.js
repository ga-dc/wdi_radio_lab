angular
  .module("radiolab", ["ui.router", "firebase"])
  .config(["$stateProvider", RouterFunction])
  .controller("radioIndexController", ["$firebaseArray", radioIndexControllerFunction])

function RouterFunction ($stateProvider){
    $stateProvider
    .state("radioIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "radioIndexController",
      controllerAs: "vm"
    });
  }

function radioIndexControllerFunction ($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
}
