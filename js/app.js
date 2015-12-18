"use strict";

(function() {
  angular
  .module('radio',[
    'ui.router',
    'ngResource',
    'ng-token-auth',
    'songs'
  ])
  .config([
    '$stateProvider',
    RouterFunction
  ])
  .config([
    '$authProvider',
    AuthConfigFunction
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
    .state('songsNew', {
      url: '/songs/new',
      templateUrl: 'js/songs/new.html',
      controller: 'SongsNewController',
      controllerAs: 'SongsNewViewModel'
    })
    .state('songsShow', {
      url:'/songs/:id',
      templateUrl: 'js/songs/show.html',
      controller: 'SongsShowController',
      controllerAs: 'SongsShowViewModel'
    })
    .state('signin', {
      url: '/signin',
      templateUrl: 'js/users/signin.html',
      controller: 'SessionsController',
      controllerAs: 'SessionsViewModel'
    })
    .state('signout', {
      url: "/signout",
      templateUrl: "js/users/signout.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state('signup', {
      url: "/signup",
      templateUrl: 'js/users/signup.html'
    })
  }

  function AuthConfigFunction($authprovider) {
    $authprovider.configure({
      apiUrl: 'http://localhost:3000'
    });
  }
})();
