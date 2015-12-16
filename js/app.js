"use strict";

(function(){
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
      .state("radioIndex",{
        url:"/welcome",
        templateUrl:"js/welcome.html",
        controller:"SongIndexController",
        controllerAs:"SongIndexViewModel"
      })
      .state("songIndex",{
        url:"/songs",
        templateUrl:"js/songs/index.html",
        controller:"SongIndexController",
        controllerAs:"SongIndexViewModel"
      })
  };
})()
