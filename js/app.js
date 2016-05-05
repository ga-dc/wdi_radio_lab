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
  .factory("SongFactory", SongFactoryFunc)
  .controller("SongIndexController", SongIndexControllerFunc)
  .controller("SongShowController", SongShowControllerFunc)

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })

    .state("songShow", {
      url: "/songs/id",
      templateUrl: "js/show.html",
      controller: "SongShowController",
      controllerAs: "SongShowControllerViewModel"
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

  SongShowControllerFunc.$inject = ["SongFactory"]
  function SongShowControllerFunc (SongFactory) {
    console.log("Yey it is working");
  }
  }());
