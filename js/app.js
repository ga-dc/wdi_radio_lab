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
    "Song",
    indexCtrlFunction
  ])

  .controller("showCtrl", [
    showCtrlFunction
  ])

  .factory("Song", [
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

  function indexCtrlFunction(Song){
    var indexVM = this;
    indexVM.songs = Song.query()
  }

  function showCtrlFunction(){
    var showVM = this;
    showVM.hello = "this is the show page";
  }

  function songFactoryFunction($resource){
    return $resource("http://localhost:3000/songs/:id", {},{
      update: {method: "PUT"}
    })
  }


}());
