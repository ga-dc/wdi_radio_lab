"use strict";

(function(){
  angular.module("WdiRadio", [
      "ui.router",
      "radio"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

    function RouterFunction($stateProvider){
      $stateProvider
      .state("wdiradioIndex", {
        url: "/wdiradio",
        templateUrl: "js/index.html",
        controller: "wdiradioIndexController",
        controllerAs: "wdiradioIndexViewModel"
      }).state("wdiradioShow", {
        url: "/wdiradio/:id",
        templateUrl: "js/show.html",
        controller: "wdiradioShowController",
        controllerAs: "wdiradioShowViewModel"
      }).state("wdiradioNew", {
        url: "/wdiradio/new",
        templateUrl: "js/new.html",
        controller: "wdiradioNewController",
        controllerAs: "wdiradioNewViewModel"
      });
    }


})()
