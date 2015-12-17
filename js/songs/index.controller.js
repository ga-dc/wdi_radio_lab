(function () {

  'use strict';

  angular
    .module('songs')
    .controller('SongIndexController', [
      'SongFactory',
      SongsIndexControllerFunction
    ]);

  function SongsIndexControllerFunction( SongFactory ) {
    this.songs = SongFactory.query();
  }

})();
