
"use strict";

(function(){
  angular
  .module("wdiradio", [
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
      templateUrl: "songs.index.html"
    })
    .state("show", {
      url: "/:id"
    });
  }

}());
