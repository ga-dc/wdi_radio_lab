"use strict";

(function(){
  angular
  .module("WDIRadio", [
    "ui.router",
    "wadio"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);
  function RouterFunction($stateProvider{
    $stateProvider
    .state("wadioIndex", {
      url: "/wadio",
      templateUrl: "js/wadio/index.html",
      controller: "WadioIndexController",
      controllerAs: "WadioIndexViewModel"
    })
    .state("wadioShow", {
      url: "/wadio/:id",
      templateUrl: "js/wadio/show.html",
      controller: "WadioShowController",
      controllerAs: "WadioShowViewModel"
    })
    .state("wadioNew", {
      url: "/wadio/new",
      templateUrl: "js/wadio/new.html",
      controller: "WadioNewController",
      controllerAs: "WadioNewViewModel"
    })
    .state("wadioEdit", {
      url: "/wadio/edit",
      templateUrl: "js/wadio/edit.html",
      controller: "WadioEditController",
      controllerAs: "WadioEditViewModel"
    })
  })
}
}());
