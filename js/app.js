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
  .controller("SongShowController", SongShowControllerFunc)
  .factory("SongFactory", SongFactoryFunc);

  function RouterFunction($stateProvider){
    $stateProvider
    .state ("songIndex", {
      url: "/songs",
      templateUrl: "js/index.html",
      controller:"SongIndexController",
      controllerAs: "indexVm"
    })
    .state ("songShow", {
      url: "/songs/:id",
      templateUrl: "js/show.html",
      controller: "SongShowController",
      controllerAs: "showVm"
    })
}


  SongFactoryFunc.$inject = ["$resource"];
  function SongFactoryFunc($resource) {
    return $resource("http://localhost:3000/songs/:id", {}, {
      update: {method: "PUT"}
    });
  }

  SongIndexControllerFunc.$inject = ["SongFactory"];
  function SongIndexControllerFunc(SongFactory) {
     var indexVm = this;
     indexVm.songs = SongFactory.query();
     indexVm.newSong = new SongFactory();

  }

  SongShowControllerFunc.$inject = ["SongFactory", "$stateParams"];
  function SongShowControllerFunc(SongFactory, $stateParams) {
     var showVm = this;
     showVm.song = SongFactory.get({id: $stateParams.id});
     showVm.newSong = new SongFactory();

  }

})();
