"use strict";

(function(){
  angular
    .module("wdiRadio", [
      "ui.router",
      "firebase",
      "songs"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])

    function RouterFunction($stateProvider){
      $stateProvider
        .state("Welcome", {
          url: "",
          templateUrl: "js/welcome.html"
        })
        .state("songs", {
          url: "/songs",
          templateUrl: "js/songs/index.html",
          controller: "SongsIndexController",
          controllerAs: "SongsIndexViewModel"
        })
    }
}());
