"use strict";
(function(){
    angular
    .module("radio", [
      "ui.router",
      "ngResource"
    ])
    .config([
      "$stateProvider",
      Router
    ]);

    function Router($stateProvider){
      $stateProvider
      .state("radioIndex", {
        url: "/radio",
        templateUrl: "views/index.html",
        controlLer: "RadioIndexCtrl",
        controllerAs: "vm"
      });
    }

})();
