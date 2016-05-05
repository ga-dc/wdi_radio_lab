"use strict";

(function(){
  angular
  .module("wdiradio", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider){
  $stateProvider
    .state("index", {
      url: "/index",
      templateUrl: "js/templates/index.template.html",
    })
    .state("songs", {
      url: "/songs",
      templateUrl: "js/templates/songs.template.html"
      controller: "SongsController",
      controllerAs: "vm"
    })
  }

})();
