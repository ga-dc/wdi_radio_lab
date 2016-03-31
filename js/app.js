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
      url: "/",
      controller: "RadioIndexController",
      controllerAs: "RadioViewModel" ,
      templateUrl: "js/songs/main_index.html"
    })

     .state("show", {
       url: "/:id",
       templateUrl: "show.html"

     });
  }
}());
