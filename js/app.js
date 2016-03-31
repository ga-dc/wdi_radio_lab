"use strict";

(function(){
  angular
  .module("radio-app",[
    "ui.router",
    "songs"
  ])
  .config(["$stateProvider",
    RouterFunction
  ]);

function RouterFunction($stateProvider){
  $stateProvider
  .state("SongIndex", {
    url: "/songs",
    templateUrl: "js/songs/index.html",
    controller: "SongIndexController",
    controllerAs: "SongIndexViewModel"
  })
  .state("SongView", {
    url: "/songs/:id",
    templateUrl: "/js/songs/show.html",
    controller: "SongShowController",
    controllerAs: "SongShowViewModel"
  });
}

})();
