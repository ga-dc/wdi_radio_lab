"use strict";

(function(){
  angular
    .module("wdi_radio", [
      "ui.router"
    ])
    .config([
      "$stateProvider",
      RouterFunc
    ])


    function RouterFunc($stateProvider) {

      $stateProvider
        .state("allSongs", {
          url: "/songs",
          templateUrl: "/js/index.template.html",
          controller: "SongsIndexCtrl",
          controllerAs: "indexVm"
        })

        .state("welcome", {
          url: "/",
          templateUrl: "/js/welcome.template.html"
        })

        .state("showSong", {
          url: "/songs/:id",
          templateUrl: "js/show.controller.js",
          controller: "SongsShowController",
          controllerAs: "showVm"
        })
    }


})();
