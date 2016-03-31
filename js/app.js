"use strict";

(function(){
  angular
  .module("wdiRadio", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("welcome", {
      url: "",
      templateUrl: "js/wdi_radio/welcome.html",
      controller: "WelcomeController"
    })
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/wdi_radio/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    });

  }
}());
