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
      .state("home", {
        url: "",
        template: "Welcome to the World's Best Song App"
      })
      .state("songs", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongsIndexController",
        controllerAs: "SongsIndexViewModel"
      })
  }
}());
