"use strict";

(function(){
  angular
  .module("wdi_radio", [
    "ui.router",
    "wdiRadio"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .landing("radioLanding", {
      url: "/landing",
      templateUrl: "js/wdiRadio/landing.html",
      controller: "RadioLandingController",
      controllerAs: "RadioLandingViewModel"
    })
    .state("radioSongs", {
      url: "/songs",
      templateUrl: "js/wdiRadio/index.html",
      controller: "RadioIndexController",
      controllerAs: "RadioIndexViewModel"
    });
  }
}());
