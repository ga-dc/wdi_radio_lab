"use strict";

(function(){
  angular
  .module("wdiRadio", [
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
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
    .state("songEdit", {
      url: "/songs/:id/edit",
      templateUrl: "js/songs/edit.html",
      controller: "SongEditController",
      controllerAs: "SongEditViewModel"
    });
  }
}());
