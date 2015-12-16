"use strict";


(function(){
  angular
  .module("radio", [
    "ui.router",
    "ngResource"
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
    // .state("welcome", {
    //   url: "/welcome",
    //   templateUrl: "js/radio/welcome.html",
    //   controller: "WelcomeController",
    //   controllerAs: "WelcomeViewModel"
    // })
    .state("songShow", {
      url: "/:id",
      templateUrl: "js/radio/songShow.html",
      controller: "SongShowController",
      controllerAs: "SongShowViewModel"
    });

  }

}());
