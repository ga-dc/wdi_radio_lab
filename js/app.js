"use strict";

(function(){
  angular
  .module("wdiRadio" , [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      template: "I'm the songs index!"
    });
  }

}());
