"use strict";

(function(){
  angular
  .module("wdiRadioApp", [
    "ui.router",
    "wdiRadio"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("wdiRadioIndex", {
      url: "/wdi_radio",
      templateUrl: "js/wdi_radio/index.html",
      controller: "wdiRadioIndexController",
      controllerAs: "wdiRadioIndexViewModel"
    })
  }

})();
