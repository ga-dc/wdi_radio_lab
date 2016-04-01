"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

// for trying to get the audio to work
  //   .config(function( $sceProvider){
  //     $sceProvider.enabled(false);
  //   }
  // }

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "indexController",
      controllerAs: "songIndexVM"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "showController",
      controllerAs: "songShowVM"
    });
  }
}());
