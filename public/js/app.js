"use strict";

(function(){
angular
  .module("music", [
    "ui.router",
    "songs"
  ])
  .config(
    ["$stateProvider",
    SongChoiceRouterFunction
  ])

function SongChoiceRouterFunction($stateProvider){
  $stateProvider
    .state("songsIndex", {
      url: "/songs",
      templateUrl: "js/wdi_radio/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
  }

}())
