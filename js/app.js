"use strict";

(function() {
  angular
  .module('radio',[
    'ui.router',
    'ngResource',
    'songs'
  ])
  .config([
    '$stateProvider',
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state('welcome', {
      url:'/welcome',
      templateUrl: 'js/songs/welcome.html'
    })
    .state('songsIndex', {
      url:'/songs',
      templateUrl: 'js/songs/index.html',
      controller: 'SongsController',
      controllerAs: 'SongsViewModel'
    })
    .state('songsShow', {
      url:'/songs/:id',
      templateUrl: 'js/songs/show.html',
      controller: 'SongsShowController',
      controllerAs: 'SongsShowViewModel'
    });
  }
})();
