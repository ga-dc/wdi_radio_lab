  "use strict";

  (function () {
    angular
    .module("WdiRadio",[
      "ui.router",
      "ngResource"
    ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("SongIndexController", SongIndexControllerFunc)
  .factory("SongFactory", SongFactoryFunc)


  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
  }
  SongFactoryFunc.$inject = ["$resource"]
  function SongFactoryFunc($resource) {
    return $resource("http://localhost:3000/songs/:id", {}, {
      update: {method: "PUT"}
    });
  }
  SongIndexControllerFunc.$inject = ["SongFactory"]
  function SongIndexControllerFunc(SongFactory){
    this.songs = SongFactory.query();
  }
  }());
