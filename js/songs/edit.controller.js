"use strict";

(function() {
  angular.module("songs")
    .controller("SongsEditController", [
      "SongFactory",
      "$state",
      "$stateParams",
      SongsEditControllerFunction
    ]);

  function SongsEditControllerFunction(SongFactory, $state, $stateParams) {
    this.song = SongFactory.get({id: $stateParams.id});


    this.edit = function() {
      this.song.$update({id: $stateParams.id}).then(function() {
        $state.go("songsIndex", {}, {reload: true});
      });
    }

    this.delete = function() {
      this.song.$delete({id: $stateParams.id}).then(function() {
        $state.go("songsIndex", {}, {reload: true});
      });
    }
  }
})();
