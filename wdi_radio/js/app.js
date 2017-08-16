"use strict";

(function(){
  angular
    .module("wdiRadio", [
      "ui.router",
      "ngResource"
    ])
    .config([
      "$stateProvider", Router
    ])
    .controller("WdiRadioController", [
      "$state",
      "$stateParams",
      "WdiRadioFactory",
      WdiRadioControllerFunc
    ])
    .controller("WdiRadioShowController", [
      "$state",
      "$stateParams",
      "WdiRadioFactory",
      WdiRadioShowControllerFunc
    ])
    .factory( "WdiRadioFactory", [
      "$resource",
      WdiRadioFactoryFunc
    ])

  function Router($stateProvider){
    $stateProvider
      .state("wdiRadioHome", {
        url: "",
        templateUrl: "js/ng-views/home.html",
        controller: "WdiRadioController",
        controllerAs: "vm"
      })
      .state("wdiRadioIndex", {
        url: "/songs",
        templateUrl: "js/ng-views/index.html",
        controller: "WdiRadioController",
        controllerAs: "vm"
      })
      .state("wdiRadioShow", {
        url: "/songs/:id",
        templateUrl: "js/ng-views/show.html",
        controller: "WdiRadioController",
        controllerAs: "vm"
      });
  }

  function WdiRadioShowControllerFunc($state, $stateParams, WdiRadioFactory){
    this.songs = WdiRadioFactory.query();
  }

  function WdiRadioFactoryFunc( $resource ){
    return $resource( "http://localhost:3000/songs/:id" )
  }

  function WdiRadioControllerFunc($state, $stateParams, WdiRadioFactory){
    this.songs = WdiRadioFactory.query();
  }

})();
