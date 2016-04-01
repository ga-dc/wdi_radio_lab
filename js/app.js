'use strict';

(function(){
  angular
  .module("WDIRadio", [
    "ui.router",
    "ngResource",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songsIndex",{
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongsIndexController",
      controllerAs: "SongsIndexViewModel"
    });
  }
})();
