"use strict";

(function(){
  angular
    .module("wdi_radio", [     // Creates the module named wdi_radio and
      "ui.router",            // gives it the router and songs dependencies.
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

        .state("allSongs", {         // This is the state's name.
          url: "/songs",              // It makes the URL say this, then...
          templateUrl: "/js/index.template.html",   // the app gets directed to this file,..
          controller: "SongsIndexCtrl",     // then uses this controller..
          controllerAs: "indexVm"           // .. where this abbreviation appears in HTML.
        })

        .state("showSong", {
          url: "/songs/:id",
          templateUrl: "js/show.html",
          controller: "SongsShowController",
          controllerAs: "showVm"
        })
    }


})();
