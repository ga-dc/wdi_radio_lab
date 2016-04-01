"use strict";

(function(){
  angular
  .module("wdiRadio", [
    "ngResource"
  ])
  .config(function($sceProvider){
    $sceProvider.enabled(false);
  });
}());
