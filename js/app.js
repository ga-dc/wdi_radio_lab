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
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songsIndex", {
      url: "/songs",
      templateUrl: "/js/songs/index.html",
      controller: "SongsIndexController",
      controllerAs: "SongsIndexViewModel"
    })
    .state("songsNew", {
      url: "/songs/new",
      templateUrl: "js/songs/new.html",
      controller: "SongsNewController",
      controllerAs: "SongsNewViewModel"
    })
    .state("songsShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "SongsShowController",
      controllerAs: "SongsShowViewModel"
    })
    .state("songsEdit", {
      url: "/songs/:id/edit",
      templateUrl: "js/songs/edit.html",
      controller: "SongsEditController",
      controllerAs: "SongsEditViewModel"
    });
  }
}());
