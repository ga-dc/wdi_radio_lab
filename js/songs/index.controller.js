"use strict";

(function(){
  angular
  .module("songs")
  .controller("indexController", [
    indexControllerFunction
  ]);

  function indexControllerFunction(){
    // var vm = this;
    this.songs = [
      {
        title: "I am Song One"
      },
      {
        title: "I'm another Song"
      }
    ];
  }
}());
