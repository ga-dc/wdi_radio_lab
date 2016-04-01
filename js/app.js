"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    "ngResource",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("index", {
      url: "/songs",
      controller: "RadioIndexController",
      controllerAs: "RadioIndexViewModel" ,
      templateUrl: "js/songs/main_index.html"
    })

 //     .state("show", {
 //       url: "/:id",
 //       templateUrl: "show.html"
 //
 //   });
 //    .state("show", {
 //     url: "/:id",
 //     templateUrl: "show.html"
 //
 // });

  }
}());
