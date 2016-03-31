"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    "songs"
  ])
  .config([
  "$stateProvider",
  "$locationProvider",
  RouterFunction
  ])

  function RouterFunction($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("songIndex", {
      url: "/"
      templateUrl: "js/radio/index.html",
      controller: "index.controller.js"
      controllerAs:
    })
  }
}());
