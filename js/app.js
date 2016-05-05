"use strict";

(function(){
  angular
  .module("wdiradio", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider){
  $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "js/templates/_index.html"
    })
    .state("songs", {
      url: "/songs",
      templateUrl: "js/templates/_songs.html",
      controller: "SongsController",
      controllerAs: "vm"
    })
    .state("newSong", {
      url:"/songs/new",
      templateUrl: "js/templates/_new.html",
      controller: "NewController",
      controllerAs: "vmNew"
    })
    .state("showSong",{
      url:"/songs/:id",
      templateUrl: "js/templates/_show.html",
      controller: "ShowController",
      controllerAs: "vmShow"
    })
  }

})();
