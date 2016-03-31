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
    .state("songNew", {
      url: '/songs/new',
      templateUrl: 'js/songs/new.html',
      controller: 'SongNewController',
      controllerAs: 'SongNewViewModel'
    }) // end of song new state
    .state('songShow', {
      url: '/songs/:id',
      templateUrl: 'js/songs/show.html',
      controller: 'SongShowController',
      controllerAs: 'SongShowViewModel'
    }); // end of song show state
  } // end of RouterFunction
})();
