"use strict";

(function() {
  angular
  .module("songs")
  .controller( "SongsIndexController", [
    SongsIndexControllerCallback
  ])

  function SongsIndexControllerCallback() {
    console.log("works!");
  }
}());
