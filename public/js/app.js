'use strict';

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
      templateUrl:"welcome.html"
    })
    .state("songsIndex",{
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "songsIndexController",
      controllerAs: "songsIndexViewModel"
    })
  }
})();
