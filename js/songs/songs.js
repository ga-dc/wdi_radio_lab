"use strict";

(function(){
  angular
  .module("songs", [
    "ngResource"
  ])
  .config(function( $sceProvider){
    $sceProvider.enabled(false);
  }
);
}());
