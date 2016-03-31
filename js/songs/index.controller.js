"use strict";

(function(){
  angular
  .module("songs")
  .controller("indexController", [
    indexControllerFunction
  ]);

  function indexControllerFunction(){
    // var vm = this;
    this.songs = songs;
  }
}());
