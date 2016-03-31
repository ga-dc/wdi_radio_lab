"use strict";

(function(){
  angular
  .module("wdiRadio")
  .controller("wdiRadioIndexController", [
    "wdiRadioFactory",
    wdiRadioIndexControllerFunction
  ]);

  function wdiRadioIndexControllerFunction( wdiRadioFactory ){
    this.songs = wdiRadioFactory.query();
  }
}());
