"use strict";

(function(){
  angular
  .module("wdiradio", [
    "ui.router"
  ])
  .config([
    "$stateProvider", //routes need a config module. Stateprovider will allow me to manage states (URL). Needs to be in quotes for minification.
    RouterFunction //function for config.
  ]);

  function RouterFunction($stateProvider){
    
  }


})();
