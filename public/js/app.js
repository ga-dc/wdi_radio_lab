"use strict";
console.log("working");
(function(){
  angular
  .module("radioApp",[
    "ui.router",
    "firebase",
    "songs"
  ])
  .config([
    "$stateprovider",
    routerFunction
  ])

  function routerFunction($stateprovider){
    $stateprovider
    .state("songsIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongsIndexController",
      controllerAs: "SongsIndexViewModel"
    })
    .state("songsShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "SongsShowController",
      controllerAs: "SongsShowViewModel"
    })
  }
})();
