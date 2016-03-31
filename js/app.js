"use strict";

(function(){
  angular
  .module("radioBip", [
    "ui.router",
    "songs"
  ])

  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("radioBipIndex", {
      url: "/songs",
      templateUrl: "js/index.html",
      controller: "IndexController",
      controllerAs: "SongsIndexViewModel"
    })
    .state("songsShow", {
      url: "/songs/:id",
      templateurl: "js/show.html"
    });
  }

})();
