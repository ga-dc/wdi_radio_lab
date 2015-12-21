(function(){
  'use strict';

  angular
    .module('wdi_radio', [
      'ui.router',
      'ng-token-auth',
      'songs'
    ])
    .config([
      '$authProvider',
      AuthConfigFunction
    ])
    .config([
      '$stateProvider',
      RouterFunction
    ]);

    function AuthConfigFunction($authProvider){
      $authProvider.configure({
        apiUrl: 'http://localhost:3000'
      });
    }


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
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'js/users/signin.html',
        controller: 'SessionsController',
        controllerAs: 'SessionsViewModel'
      })
      .state('signout',{
        url: '/signout',
        templateUrl: 'js/users/signout.html',
        controller: 'SessionsController',
        controllerAs: 'SessionsViewModel'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'js/users/signup.html',
        controller: 'SessionsController',
        controllerAs: 'SessionsViewModel'
      });
    }
})();
