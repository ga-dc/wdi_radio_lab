"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    "ngResource",
    "songs"
  ])

  .config([
    "$stateProvider",
    RouterFunction
  ])

  .controller("indexCtrl", [
    "SongFactory",
    indexCtrlFunction
  ])

  .controller("showCtrl", [
    "SongFactory",
    "$stateParams",
    showCtrlFunction
  ])

  .factory("SongFactory", [
    "$resource",
    songFactoryFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "ngviews/songs.index.html",
      controller: "indexCtrl",
      controllerAs: "indexVM"
    })

    .state("show", {
      url: "/:id",
      templateUrl: "ngviews/songs.show.html",
      controller: "showCtrl",
      controllerAs: "showVM"
    })

  }

  function indexCtrlFunction(SongFactory){
    var indexVM = this;
    indexVM.songs = SongFactory.query()
  }

  function showCtrlFunction(SongFactory, $stateParams){
    this.song = SongFactory.get({id: $stateParams.id});
  }

  function songFactoryFunction($resource){
    return $resource("http://localhost:3000/songs/:id", {},{
      update: {method: "PUT"}
    })
  }


}());
