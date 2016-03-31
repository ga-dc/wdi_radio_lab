// js/songs/new.controller.js

"use strict";

(function(){
  angular
    .module( "songs" )
    .controller( "SongNewController", [
      "SongFactory",
      SongNewControllerFunction
    ]);

    function SongNewControllerFunction( SongFactory ){
      this.song = new SongFactory();
      this.create = function(){
        this.song.$save()
      }
    }
}());
