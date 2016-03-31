"use strict";

(function() {
  angular
  .module('wdiRadio', [
    'ui.router',
    'songs'
  ])
  .config([
    '$stateProvider',
    RouterFunction
  ]);

  function RouterFunction($stateProvider) {
    $stateProvider
    .state('songIndex', {
      url: '/songs',
      templateUrl: 'js/songs/index.html',
      controller: 'SongIndexController',
      controllerAs: 'SongIndexViewModel'
    }) // end of song index state
    .state('songShow', {
      url: '/songs/:id',
      templateUrl: 'js/songs/show.html',
      controller: 'SongShowController',
      controllerAs: 'SongShowViewModel'
    }); // end of song show state
  } // end of RouterFunction
})();
