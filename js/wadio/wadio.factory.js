"use strict";

(function(){
  angular
  .module("WDIRadio")
  .controller("WadioIndexController",[
    "$resource",
    "WadioFactory",
    WadioIndexControllerFunction
  ]);

  function WadioIndexControllerFunction(WadioFactory){
    this.wadio = WadioFactory.query();
    this.newWadio = new WadioFactory();
  }
}());
