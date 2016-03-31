"use strict";

(function() {
  angular.module("songs")
    .controller("SongsNewController", [
      "SongFactory",
      "$state",
      "$stateParams",
      SongsNewControllerFunction
    ]);

  function SongsNewControllerFunction(SongFactory, $state, $stateParams) {
    this.song = new SongFactory();

    this.create = function() {
      this.song.$save().then(function() {
        $state.go("songsIndex", {}, {reload: true});
      });
    }
  }
})();
