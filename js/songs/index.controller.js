"use strict";

(function() {
  angular
  .module('songs')
  .controller('SongIndexController', [
    '$state',
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction($state) {
    this.songs = [
      {title: 'this'},
      {title: 'is'},
      {title: 'a'},
      {title: 'song'}
    ]
    this.goToIndex = function() {
      $state.go('songIndex')
    }
  } // end of songs index controller function
})();
