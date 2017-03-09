"use strict";

(function(){
  angular
    .module("songs", ["ui.router", "firebase"])
    .config(["$stateProvider", Router])
    .controller("RootController", [ RootControllerFunction])
    .controller("SongsIndexController", ["$firebaseArray", SongsIndexControllerFunction])

    function Router($stateProvider){
      $stateProvider
      .state("root", {
        url: "/",
        templateUrl: "js/ng-views/root.html",
        controller: "RootController",
        controllerAs: "vm"
      })
      .state("songsIndex", {
        url: "/songs",
        templateUrl: "js/ng-views/index.html",
        controller: "SongsIndexController",
        controllerAs: "vm"
      });
    }

    function RootControllerFunction () {
      console.log("You are in the root page")
    }

    function SongsIndexControllerFunction ($firebaseArray) {
      console.log("You are in the index page")
    }

}());
