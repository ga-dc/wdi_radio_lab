"use strict";

(function (){
  angular
  .module("wdi-radio", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
      RouterFunction
  ]);


  function RouterFunction($stateProvider){
    $stateProvider
    .state("songsIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
    .state("songsNew", {
      url: "/songs/new",
      templateUrl: "js/songs/new.html",
      controller: "SongNewController",
      controllerAs: "SongNewViewModel"
    })
    .state("songsShow",{
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "SongShowController",
      controllerAs: "SongShowViewModel"
    });



  }
}());
