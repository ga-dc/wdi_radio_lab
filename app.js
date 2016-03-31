"use strict";

(function(){
  angular
    .module("radioApp", [
      "ui.router",
      "songs"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])

    function RouterFunction($stateProvider){
      $stateProvider
        .state("songIndex", {
        url: "/songs",
        templateURL: "js/radio/index.html",
        controller: "js/radio/index.controller.js",
        controllerAs: "SongIndexViewModel"
        })
      }
})();
