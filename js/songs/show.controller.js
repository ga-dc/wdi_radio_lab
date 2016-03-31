"use strict";

(function() {
  angular
  .module('songs')
  .controller('SongShowController', [
    '$stateParams',
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction($stateParams) {
    console.log($stateParams);
  }
})();
