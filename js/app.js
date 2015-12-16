"use strict";

(function(){
  angular.module("station", [
    // injecting dependencies
    "ui.router",
    "songs"
  ])
  .config([ "$stateProvider",
  RouterFunction
]);

function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex", {
    url: "/",
    templateUrl: "js/station/welcome.html"
  })
  .state("songShow", {
    url: "/songs",
    templateUrl: "js/station/index.html",
    // we get this controller from the index.controller.js
    controller: "SongIndexController",
    // this is used in the index.html view where we display all the songs
    controllerAs: "SongIndexViewModel"
  })
  // it is linked in index.html to individal songs that then render the show.html on clicking
  .state("idShow", {
    url: "/songs/:id",
    templateUrl: "js/station/show.html",
    controller: "SongShowController",
    // this is used in the show.html view where we display individual song
    controllerAs: "SongShowViewModel"
  });
}

}());
