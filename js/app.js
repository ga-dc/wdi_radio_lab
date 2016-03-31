"use strict";

(function(){
  angular
  .module("wdiradio", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider", //routes need a config module. Stateprovider will allow me to manage states (URL). Needs to be in quotes for minification.
    RouterFunction //function for config.
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",

      controller: "SongsIndexController",
      controllerAs: "SongsIndexVM" //saves this instance as a variable I can use in the view.
    })
  }


})();
