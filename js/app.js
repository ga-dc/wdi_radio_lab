'use strict';

(function() {
  angular
  .module('wdiRadio', [
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
    }) // end of song index state
    .state('songShow', {
      url: '/songs/:id',
      templateUrl: 'js/songs/show.html'
    }); // end of song show state
  } // end of RouterFunction
})();
