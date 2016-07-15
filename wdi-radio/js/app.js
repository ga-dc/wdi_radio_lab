"use strict";

(function(){
  angular
      .module("wdi-radio", [
        "ui.router",
        "songs"
      ])
      .config([
        "$stateProvider",
        Router])

    function Router($stateProvider){
      console.log("here");
        $stateProvider
        .state("home",{
          url: "/",
          templateUrl:"js/home.html"
        })
        .state("index",{
          url: "/songs",
          templateUrl:"songs/songs.index.html",
          controller: "songsIndexController",
          conrollerAs: "vm"
        })
      }
})();
