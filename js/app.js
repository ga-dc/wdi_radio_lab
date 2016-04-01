"use strict";

(function(){
  angular
  .module("wdiradio", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider", //routes need a config module. Stateprovider will allow me to manage states (URL). Needs to be in quotes for minification.
    RouterFunction //function for config.
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongsIndexController",
      controllerAs: "SongsIndexVM" //saves this instance as a variable I can use in the view.
    })

    .state("songEdit",{
      url: "/songs/:id/edit",
      templateUrl: "js/songs/edit.html",
      controller: "SongsEditController",
      controllerAs: "SongsEditVM"
    })

    .state("songNew", {
      url: "/songs/new",
      templateUrl: "/js/songs/new.html",
      controller: "SongsNewController",
      controllerAs: "SongsNewVM"
    })

    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "SongsShowController",
      controllerAs: "SongsShowVM"
    })

  }// close RouterFunction. all the .states need to be in this function to work


})();
