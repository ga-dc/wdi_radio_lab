"use strict";
(function(){
  angular
    .module("wdiRadio", [
      "ui.router",
      "songs"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])

    function RouterFunction($stateProvider){
      console.log("router funciton called");
      $stateProvider
        .state("Welcome",{
          url: "",
          templateUrl: "js/welcome.html"
        })
        .state("songIndex", {
          url: "/songs",
          templateUrl: "js/songs/index.html",
          controller: "SongsIndexController",
          controllerAs: "SongsIndexViewModel"
        })
        .state("songShow",{
          url: "/songs/:id",
          templateUrl: "js/songs/show.html",
          controller: "SongShowController",
          controllerAs: "SongShowViewModel"
        });


    }

})()
