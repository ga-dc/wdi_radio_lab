"use strict";

(function(){
  angular
  .module("wdiradio", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
      .state("welcome",{
        url: "/",
        templateUrl: "js/welcome.template.html",
        Controller: "welcomeController",
        ControllerAs: "welcomeVm"
      });
  }
})();
