"use strict";

(function(){
  angular
    .module("wdi_radio", [
      "ui.router",
      "songs"
    ])
    .config([
      "$stateProvider",
      RouterFunc
    ])


    function RouterFunc($stateProvider) {

      $stateProvider

        .state("welcome", {
          url: "/",
          templateUrl: "/js/welcome.template.html"
        })

        .state("allSongs", {
          url: "/songs",
          templateUrl: "/js/index.template.html",
          controller: "SongsIndexCtrl",
          controllerAs: "indexVm"
        })

        .state("showSong", {
          url: "/songs/:id",
          templateUrl: "js/show.html",
          controller: "SongsShowController",
          controllerAs: "showVm"
        })
    }


})();
