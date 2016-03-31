"use strict";

(function(){
  angular
  .module( "songs", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("index", {
      url: "/songs",
      templateUrl: "js/songs/index.html"
    })
  }

}());
