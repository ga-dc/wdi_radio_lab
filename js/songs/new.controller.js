"use strict";

(function(){
  angular
    .module( "songs" )
    .controller( "SongNewController", [
      "SongFactory",
      "$state",
      SongNewControllerFunction
    ]);

    function SongNewControllerFunction( SongFactory ){
      this.song = new SongFactory();
      this.create = function(){
        this.song.$save()
        $state.go("songs", {}, {reload: true})
      }
    }
}());
