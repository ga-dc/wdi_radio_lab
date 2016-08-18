"use strict";

(function(){
  angular
  .module("wdiRadio", [
    "ui.router",
    "firebase",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterCallBack
  ]);

  function RouterCallBack($stateProvider){
    console.log("router is working");
    $stateProvider
    .state("welcome", {
      url:"",
      templateUrl:"js/welcome.html"
    })
    .state("songIndex",{
      url:"/songIndex",
      templateUrl:"js/songs/index.html",
      controller:"SongsIndexController",
      controllerAs:"SongsIndexViewModel"
    })
  }
})();
