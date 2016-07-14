(function(){
angular
    .module("music", ['ui.router','songs'])
    .config(["$stateProvider",RouterDo]);

function RouterDo($stateProvider){
    $stateProvider
    .state('welcome', {
            url: '/welcome',
            templateUrl: '/js/songs/partial_index.html'
        })

        .state('songsIndex', {
          url: '/songs',
          templateUrl: 'js/songs/index.html',
          controller:'SongIndexController',
          controllerAs: 'SongIndexViewModel'
        })

      }

}());
