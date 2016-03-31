"use strict";

(function(){
  angular
  .module("radioapp", [
    "ui.router",
  ])
  .config([
    "$stateProvider",
    RouterFuntion
  ]);

  function RouterFuntion($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      template: "I'm the Songs index, I will show a list of all the songs!!!"
    });
  }
})();
