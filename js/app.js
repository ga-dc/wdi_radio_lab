"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider

    .state("songsIndex", {
      url: "/",
      templateUrl: "js/radio/songsIndex.html",
      controller: "SongsIndexController",
      controllerAs: "SongsIndexViewModel"
    })

    .state("welcome", {
      url: "/welcome",
      templateUrl: "js/radio/welcome.html",
      controller: "WelcomeController",
      controllerAs: "WelcomeViewModel"
    });
  }

}());