"use strict";

(function() {
  angular
    .module("radioLab", [
      "ui.router",
      "songs"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("songsIndex", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongIndexController",
        controllerAs: "SongIndexViewModel"
      })
      .state("songNew", {
        url: "/songs/new",
        templateUrl: "js/songs/new.html",
        controller: "SongNewController",
        controllerAs: "SongNewViewModel"
      })
      .state("songShow", {
        url: "/songs/:id",
        templateUrl: "js/songs/show.html",
        controller: "SongShowController",
        controllerAs: "SongShowViewModel"
      })
      .state("songEdit", {
        url: "/songs/:id/edit",
        templateUrl: "js/songs/edit.html",
        controller: "SongEditController",
        controllerAs: "SongEditViewModel"
      });
  }
}());
