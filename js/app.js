"use strict";

(function(){
  angular
    .module("wdiradio", [
      "ui.router",
      "ngResource",
      "songs"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

  function RouterFunction($stateProvider){
    $stateProvider
      .state("welcome", {
        url: "",
        templateUrl: "js/welcome.html"
      })
      .state("songIndex", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongIndexController",
        controllerAs: "SongIndexViewModel"

      })

      .state("show", {
        url: "/show/:id",
        templateUrl: "js/songs/show.html",
        controller: "SongShowController",
        controllerAs: "SongShowViewModel"
      });


  }

})();
