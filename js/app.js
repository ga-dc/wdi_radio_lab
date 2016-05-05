"use strict";

(function(){
  angular
  .module("radioApp",[
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("SongIndexController", SongIndexControllerFunc)
  .factory("SongFactory", SongFactoryFunc);

  function RouterFunction($stateProvider){
    $stateProvider
    .state ("songIndex", {
      url: "/songs",
      templateUrl: "js/index.html",
      controller:"SongIndexController",
      controllerAs: "indexVm"
    })
  }


  SongFactoryFunc.$inject = ["$resource"];
  function SongFactoryFunc($resource) {
    return $resource("http://localhost:3000/songs/:id", {}, {
      update: {method: "PUT"}
    })
  }

  SongIndexControllerFunc.$inject = ["SongFactory"];
  function SongIndexControllerFunc(SongFactory) {
     var indexVm = this;
     indexVm.songs = SongFactory.query();
     indexVm.newSong = new SongFactory();

  }

})();
