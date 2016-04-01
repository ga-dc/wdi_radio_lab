"use strict";

(function () {
  angular
  .module("myApp", [
    "ui.router",
    "songs"
  ])

  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("index", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })

    // .state("show", {
    //   url: "/songs/:id",
    //   templateUrl: "",
    //   controller: "",
    //   controllerAs: ""
    // })
  }
})();
