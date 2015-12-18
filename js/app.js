"use strict";

(function() {
  angular
  .module('radio',[
    'ui.router',
    'ngResource'
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
      templateUrl: 'js/songs/index.html'
    });
  }
})();
