"use strict";

(function(){
  angular
    .module("songs")
    .controller("IndexController", [
      "SongFactory",
      ControllerFunction
    ]);

  function ControllerFunction(SongFactory){
    this.songs = SongFactory.query();
    this.formIsVisible = false;
    this.toggleForm = function(){
      console.log("toggleform")
      if(this.formIsVisible){
        this.formIsVisible = false
      }
      else{
        this.formIsVisible = true
      }
    };
  }
}());

// for getting player to work (but do I need a different controller?)
// pass in $sce to controller function, add as dependency on module
// selectedSong.encodedUrl = $sce.trustAsResourceUrl(selectedSong.audio_url)
