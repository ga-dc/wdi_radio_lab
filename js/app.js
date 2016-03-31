"use strict";

(function(){
  angular
  .module("wdiRadio",[
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
      templateUrl:"js/welcome.html"
    })
    .state("songIndex",{
      url:"/songs",
      templateUrl:"songs/index.html",
      templateUrl:"js/songs/index.html",
      controller:"SongIndexController",
      controllerAs:"SongIndexViewModel"
    })
  }
})();
