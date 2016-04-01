"use strict";

 (function(){
   angular
   .module("songs")
   .controller("RadioShowController", [
     "RadioFactory",
     "$stateParams",
     RadioShowControllerFunction
   ]);

   function RadioShowControllerFunction(RadioFactory, $stateParams){
     this.song = RadioFactory.get({id: $stateParams.id});
   }
 }());
