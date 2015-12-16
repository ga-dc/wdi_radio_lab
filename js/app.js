"use strict";

(function(){
  angular
  .module("radio",[
    "ui-router",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);
  function RouterFunction($stateProvider){
    $stateProvider
      .state("radioIndex",{
        url:"/welcome",
        templateUrl:"js/welcome.html"
      })
      .state("songIndex",{
        url:"/songs",
        templateUrl:"songs/index.html"
      })
  };
})()
