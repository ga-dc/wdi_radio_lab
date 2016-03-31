"use strict";

(function(){
  angular
  .module("radio")
  .controller("RadioIndexCtrl", [
    //"$sce",
    "SongFactory",
    ctrlFunc
  ]);

  function ctrlFunc(SongFactory){
    this.songs = SongFactory.query();
    this.showPlayer = false;
    this.playerSong = null;

    this.togglePlayer = function(songId){
      if (this.showPlayer){this.showPlayer=false;}
      else {
        this.showPlayer = true;
        this.playerSong = SongFactory.get({id: songId});
        //.$promise.then(function(song){console.log(song.title);})
        //NOTE: This will allow use to call playersong correctly directly after the assignment. Needed because of async js on .get
      }
    }

    this.getPlayerUrl = function(){
      return this.playerSong; //TODO: THIS WILL WORK.
      // return this.playerSong.audio_url; //TODO: THIS WILL WORK BUT THROW ERRORS.
      //$sce.trustAsResourceUrl("http://www.google.com");
    }
  }
})();
