(function(){
  'use strict';

  angular
    .module('wdi_radio', [
      'ui.router',
      'songs'
    ])
    .config([
      '$stateProvider',
      RouterFunction
    ]);

    function RouterFunction($stateProvider){
      $stateProvider
      .state('welcome', {
        url: '',
      })
      .state('songs', {
        url: '/songs',
        templateUrl: 'js/songs/index.html',
        controller: 'SongIndexController',
        controllerAs: 'SongIndexViewModel'
      })
      .state('songsShow', {
        url: '/songs/:id',
        templateUrl: 'js/songs/show.html',
        controller: 'SongShowController',
        controllerAs: 'SongShowViewModel'
      });
    }
})();
