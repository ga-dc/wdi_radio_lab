"use strict";

(function(){
  angular
  .module('songs')
  .controller('SongsController', [
    'SongFactory',
    SongsControllerFunction
  ]);

  function SongsControllerFunction(SongFactory){
    this.songs = SongFactory.query();
  }
})();
