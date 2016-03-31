"use strict";

(function (){
  angular
  .module("wdi_radio", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);
  function RouterFunction($stateProvider){
    $stateProvider
    .state("SongIndex",{
     url:"/songs",
     templateUrl:"js/songs/index.html",
     controller: "SongIndexController",
     controllerAs:"SongIndexViewModel"
    })
    .state("SongShow",{
      url:"songs/:id",
      templateUrl:"js/songs/show.html"
    });
  }

})();
