"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    "songs"
  ])

  .config([
    "$stateProvider",
    RouterFunction
  ]);

  .controller("indexCtrl", [
    indexCtrlFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "js/radio/index.html"
      controller: "indexCtrl",
      controllerAs: "indexVM"
    })

    .state("show", {
      url: "/:id",
    })

  }

  function indexCtrlFunction(){
    var indexVM = this;
    indexVM.hello = "hello world";
  }


}());
