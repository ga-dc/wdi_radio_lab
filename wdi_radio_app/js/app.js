angular
.module('radio', ['ui.router', 'ngResource'])
.config(['$stateProvider', RouterFunction])
.controller('RadioLandingController', [function(){}])
.controller('RadioIndexController', ['RadioFactory', function(RadioFactory){
    this.songs = RadioFactory.query(function(result){
    });
}])
.controller('RadioShowController', ['RadioFactory', function(RadioFactory, $stateParams){
    this.song = RadioFactory.get({id: $stateParams.id});
    console.log(this.song);

}])
.factory('RadioFactory', ['$resource', function($resource){
    return $resource('http://localhost:3000/songs/:id.json',{},{'query': {method: 'GET', isArray: true}})
}])


function RouterFunction($stateProvider) {
    $stateProvider
    .state('welcome', {
        url: '/',
        templateUrl: 'js/ng-views/landing.html',
        controller: 'RadioLandingController',
        controllerAs: 'vm'

    })
    .state('songsIndex', {
        url: '/songs',
        templateUrl: 'js/ng-views/index.html',
        controller: 'RadioIndexController',
        controllerAs: 'vm'
    })
    .state('songsShow', {
        url: '/songs/:id',
        templateUrl: 'js/ng-views/show.html',
        controller: 'RadioShowController',
        controllerAs: 'vm'
    })

}
