"use strict";

(function(){
  angular
  .module("WDIRadio")
  .controller("WadioShowController",[
    "WadioFactory",
    "$stateParams",
    WadioShowControllerFunction
  ]);
  function WadioShowControllerFunction(WadioFactory, $stateParams){
    this.wadio = WadioFactory.get({:id $stateParams.id});
  }
}());
