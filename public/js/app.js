angular
.module("radio", ["ui.router", "firebase"])
.controller("RadioController", ["$firebaseArray", RadioControllerFuntion])
.config([
  "$stateProvider",
  RouterFunction
])
function RouterFunction($stateProvider){
  $stateProvider
    .state("radioIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "RadioController",
      controllerAs: "vm"
    })
}

    function RadioControllerFuntion($firebaseArray){
      let ref = firebase.database().ref().child("radios");
      this.radios = $firebaseArray(ref);
    }
