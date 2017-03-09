"use strict";

(function(){
  angular
    .module("radio", [
        "ui.router",
        "songs"
    ])
    .config([
        "$stateProvider",
        RouterControllerFunction
    ]);

  function RouterControllerFunction($stateProvider){
    $stateProvider
      .state("songIndex", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "IndexController",
        controllerAs: "ICvm"
      })
  };

}());



