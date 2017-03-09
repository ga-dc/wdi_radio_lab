// "use strict"


angular
  .module("wdiRadio", ["ui.router", "firebase"])
  .config(["$stateProvider", RouterFunction])
  .controller("RadioIndexController", ["$firebaseArray", RadioIndexControllerFunction])
  .controller("RadioShowController", ["$stateParams","$firebaseObject", RadioShowControllerFunction])

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("radioIndex", {
          url: "/radio",
          templateUrl: "js/ng-views/index.html",
          controller: "RadioIndexController",
          controllerAs: "vm"
      })
      .state("radioShow", {
          url: "/radio/:id",
          templateUrl: "js/ng-views/show.html",
          controller: "RadioShowController",
          controllerAs: "vm"
      })
  }

function RadioIndexControllerFunction($firebaseArray) {
  let ref = firebase.database().ref().child("radio")
  this.radio = $firebaseArray(ref)
}

function RadioShowControllerFunction($stateParams, $firebaseObject) {
  let ref = firebase.database().ref().child("radio/" + $stateParams.id)
}
