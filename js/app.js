"use strict";

(function() {
  angular
    .module("wdiRadio", [
      "ui.router",
      "songs"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("welcome", {
        url: "/",
        templateUrl: "js/index.html",
        controller: "WelcomeController",
        controllerAs: "WelcomeControllerViewModel"
      })
      .state("songsIndex", {
        url: "/songs",
        templateUrl: "js/songs/songs.html",
        controller: "SongsIndexController",
        controllerAs: "SongsIndexViewModel"
      })
      .state("songNew", {
        url: "/songs/new",
        templateUrl: "js/songs/new.html",
        controller: "SongsNewController",
        controllerAs: "SongsNewViewModel"
      })
      .state("songEdit", {
        url: "/songs/:id/edit",
        templateUrl: "js/songs/edit.html",
        controller: "SongsEditController",
        controllerAs: "SongsEditViewModel"
      });
  }
})();
