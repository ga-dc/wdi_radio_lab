"use strict";

(function(){
  angular
  .module( "radio", [
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
      url: "/",
      templateUrl: "js/songs/index.html"
    })
    .state("show", {
      url: "/songs",
      templateUrl: "js/songs/show.html"
    })
  }

}());
