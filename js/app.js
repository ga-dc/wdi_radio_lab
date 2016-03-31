"use strict";

(function(){
  angular
    .module("radio", [
      "ui-router",
      "songs"
    ])
    .config([
    "$stateProvider",
    RouterFunction
    ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "songIndexController",
      controllerAs: "songIndexViewModel"
    })
    .state("songNew", {
      url: "/songs/new",
      templateUrl: "js/songs/new.html",
      controller: "songNewController",
      controllerAs: "songNewViewModel"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "songShowController",
      controllerAs: "songShowViewModel"
    })
    .state("songEdit", {
      url: "/songs/:id/edit",
      templateUrl: "js/songs/edit.html",
      controller: "songEditController",
      controllerAs: "songEditViewModel"
    });
    // .state("welcome", {
    //   url: "/", ??
    //   templateUrl: "index.html", ??
    //   controller: "welcomeController",
    //   controllerAs: "welcomeViewModel"
    // });
  }

}());
