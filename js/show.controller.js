"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongsShowController", SongsShowCtrl)


  function SongsShowCtrl(){
      var showVm = this;
      showVm.hello = "Hello, Ralph"
  }
})();
