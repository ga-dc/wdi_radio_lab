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
      .state('songs', {
        url: '/songs',
        templateUrl: 'js/songs/index.html',
        controller: 'SongIndexController',
        controllerAs: 'SongIndexViewModel'
      })
      .state('songShow', {
        url: '/songs/:id',
        templateURL: 'js/songs/show.html',
        controller: 'SongShowController',
        controllerAs: 'SongShowViewModel'
      });
    }
})();
