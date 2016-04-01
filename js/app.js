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
    templateUrl: "js/song/index.html",
    controller: "SongIndexController",
    controllerAs: "SongIndexViewModel"
  })
  .state("songShow", {
    url: "/song/:id",
    templateUrl: "/js/song/show.html",
    controller: "SongShowController",
    controllerAs: "SongShowViewModel"
  });
}

})();
