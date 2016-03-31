"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    var vm = this;
    console.log("ya!");
  }
}());
