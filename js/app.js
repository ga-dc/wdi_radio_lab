"use strict";

(function(){
  angular
  .module("wdiRadio" , [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexVM"
    })
    .state("songEdit", {
      url: "/songs/edit/:id",
      templateUrl: "js/songs/edit.html",
      controller: "SongEditController",
      controllerAs: "SongEditVM"
    })
    .state("songNew", {
      url: "/songs/new",
      templateUrl: "js/songs/new.html",
      controller: "SongNewController",
      controllerAs: "SongNewVM"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "SongShowController",
      controllerAs: "SongShowVM"
    });
  }

}());
