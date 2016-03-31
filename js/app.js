'use strict';

(function() {
  angular
  .module('songs', [
    'ui.router'
  ])
  .config([
    '$stateProvider',
    RouterFunction
  ]);

  function RouterFunction($stateProvider) {
    $stateProvider
    .state('songIndex', {
      url: '/songs',
      templateUrl: 'js/songs/index.html'
    }); // end of song index state
  } // end of RouterFunction
})();
