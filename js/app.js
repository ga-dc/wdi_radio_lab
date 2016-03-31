"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("index", {
      url: "/pizza",
      controller: "RadioIndexController",
      controllerAs: "RadioViewModel" ,
      templateUrl: "ng-views/index.html"
    })

     .state("show", {
       url: "/:id",
       templateUrl: "ng-views/show.html"

     });
  }
}());
