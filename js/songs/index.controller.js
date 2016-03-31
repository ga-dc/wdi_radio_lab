"use strict";

(function(){
  angular
  .module("songs")
  .controller("indexController", [
    indexControllerFunction
  ]);

  function indexControllerFunction(){
    console.log("things");
  }
}());
