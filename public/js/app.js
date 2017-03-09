// ######################################
// 201703091111L  EL JUEVES   JAY -->
//
'use strict';

(function() {
    angular
        .module('radio', ['ui.router', 'firebase'])
        .config(['$stateProvider', Router])
        .controller('songsRootController', [songsRootControllerFunction])
        .controller('songsIndexController', ['$firebaseArray', songsIndexControllerFunction])

    function Router($stateProvider) {
        $stateProvider
            .state('songsRoot', {
                url: '/',
                templateUrl: 'js/ng-views/root.html',
                controller: 'songsRootController',
                controllerAs: 'vm'
            })
            .state('songsIndex', {
                url: '/songsIndex',
                templateUrl: 'js/ng-views/songsIndex.html',
                controller: 'songsIndexController',
                controllerAs: 'vm'
            })
    }

    function songsRootControllerFunction() {
        console.log('you have entered the songsRootControllerFunction');
    }

    function songsIndexControllerFunction($firebaseArray) {
        let ref = firebase.database().ref().child('songs')
        this.songs = $firebaseArray(ref)
    }
}())
