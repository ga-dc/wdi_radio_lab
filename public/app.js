var songs = angular.module('songs', ['ui.router']);

songs.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/welcome");
    $stateProvider

        .state('welcome', {
            url: '/welcome',
            templateUrl: '/js/songs/partial_index.html'
        })

        .state('songsIndex', {
          url: '/songs',
          templateUrl: '/js/songs/partial_view.html'
        })
        .state('songCreate',{
          url: '/songs/create',
          templateUrl: 'js/songs/partial_create.html'
        })


});
