"use strict";

(function(){
  angular
  .module("radioapp", [
    "ui.router",
    "songsmodule"
  ])
  .config([
    "$stateProvider",
    RouterFuntion
  ]);

  function RouterFuntion($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songsection/index.html"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songssection/show.html"
    });
  }
})();
