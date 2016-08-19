"use strict";

(function() {
  angular
  .module("songs")
  .controller( "SongsShowController", [
    "$firebaseObject",
    SongsShowControllerCallback
  ])

  function SongsShowControllerCallback($firebaseObject) {
  console.log("works");
  }
}());
