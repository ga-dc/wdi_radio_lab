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
    indexCtrlFunction
  ])

  .controller("showCtrl", [
    showCtrlFunction
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

  function indexCtrlFunction(){
    var indexVM = this;
    indexVM.hello = "hello world";
  }

  function showCtrlFunction(){
    var showVM = this;
    showVM.hello = "this is the show page";
  }


}());
