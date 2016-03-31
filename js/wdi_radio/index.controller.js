"use strict";

(function(){
  angular
  .module("wdiRadio")
  .controller("wdiRadioIndexController", [
    "wdiRadioFactory",
    "$sce",
    wdiRadioIndexControllerFunction
  ]);

  function wdiRadioIndexControllerFunction( wdiRadioFactory ){
    this.songs = wdiRadioFactory.query();
  }
}());
