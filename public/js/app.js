"use strict";

  (function()){
    angular
      .module("wdiradio", ["ui.router", "firebase"])
      .config(["$stateProvider", Router])
      .controller("RootController", [RootControllerFunction])
      .controller("WDIRadioIndexController", ["$firebaseArray", WDIRadioControllerFunction])

      function Router($stateProvider){
        .state("root", {
          url: "/",
          templateUrl: "js/ng-views/root.html",
          controller: "RootController"
          controllerAs: "vm"
        })
        .state("wdiradioIndex", {
          url: "/songs",
          templateUrl: "js/ng-views/index.html",
          controller: "WDIRadioIndexController",
          controllerAs: "vm"
        });
      }

      function RootControllerFunction() {
        console.log("This the root page fam!")
      }

      function WDIRadioIndexControllerFunction ($firebaseArray){
        console.log("You found the index page")
      }
    }(());
