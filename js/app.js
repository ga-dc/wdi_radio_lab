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
      .state("home", {
        url: "",
        template: "Welcome to the World's Best Song App"
      })
      .state("songs", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongsIndexController",
        controllerAs: "SongsIndexViewModel"
      })
      .state("newSong", {
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
      .state("editSong", {
        url: "/songs/:id/edit",
        templateUrl: "js/songs/edit.html",
        controller: "SongsEditController",
        controllerAs: "SongsEditViewModel"
      });
  }
}());
