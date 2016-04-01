"use strict";

(function(){
  angular
  .module("radioapp", [
    "ui.router",
    "songsmodule"
  ])
  .config([
    "$stateProvider",
    RouterFuntion
  ]);

  function RouterFuntion($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songssection/index.html",
      controller: "SongsIndexCtrl",
      controllerAs:"SongsIndexViewModel"
    })
    .state("songNew", {
      url: "/songs/new",
      templateUrl: "js/songssection/new.html",
      controller: "SongNewController",
      controllerAs: "SongNewViewModel"
    })
    .state("songEdit", {
      url: "/songs/edit/:id",
      templateUrl: "js/songssection/edit.html",
      controller: "SongEditController",
      controllerAs: "SongEditViewModel"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songssection/show.html",
      controller: "SongsShowCtrl",
      controllerAs: "SongShowViewModel"
    });
  }
})();
