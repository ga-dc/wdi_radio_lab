"use strict";

(function() {
  angular
  .module("songApp",[
    "ui.router",
    "supplies"
  ])
  .config([
    "$stateProvider",
    "$urlRouterProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider, $urlRouterProvider){

    $stateProvider
    .state("songIndex", {
      url:"/",
      templateUrl: "js/components/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
    .state("songNew", {
      url:"/songs/new",
      templateUrl: "js/components/new.html",
      controller: "SongNewController",
      controllerAs: "SongNewViewModel"
    })
    .state("songShow", {
      url:"/songs/:id",
      templateUrl: "js/components/show.html",
      controller: "SongShowController",
      controllerAs: "SongShowViewModel"
    })
    .state("songEdit", {
      url:"/songs/:id/edit",
      templateUrl: "js/components/edit.html",
      controller: "SongEditController",
      controllerAs: "SongEditViewModel"
    });

    $urlRouterProvider
    .otherwise("/");
  }
}());
