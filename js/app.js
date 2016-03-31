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
    indexVM.hello = "hello world";
    console.log(Song)
  }

  function showCtrlFunction(){
    var showVM = this;
    showVM.hello = "this is the show page";
  }

  function songFactoryFunction($resource){
    return $resource("/song/:id.json", {},{
      update: {method: "PUT"}
    })
  }


}());
