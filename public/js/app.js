
                  // ######################################
                  // 201703091111L  EL JUEVES   JAY -->
                  //
'use strict';

// (function(){
angular
  .module( 'radio',                     [ 'ui.router', 'firebase'     ] )
  .config(                              [ '$stateProvider',  Router   ] )
  .controller( 'songsRootController'  , [                    songsRootControllerFunction  ] )
  .controller( 'songsIndexController' , [ '$firebaseArray',  songsIndexControllerFunction ] )

//
//   function song
//
//
  // .factory('songFactory', [
  //   '$resource',
  //   songFactoryFunction
  // ])
  // .controller('songNewController', [
  //   'songFactory',
  //   '$state',
  //   songNewControllerFunction
  // ])
//   .controller('songShowController', [
//     'songFactory',
//     '$stateParams',
//     songShowControllerFunction
//   ])
//   .controller('songEditController', [
//     'songFactory',
//     '$stateParams',
//     '$state',
//     songEditControllerFunction
//   ])
//
function Router( $stateProvider ) {
                 $stateProvider
  .state('songsRoot', {
    url: '/'        ,
    templateUrl:  'js/ng-views/root.html' ,
    controller:   'songsRootController'   ,
    controllerAs: 'vm'
  })
  .state( 'songsIndex'      , {
    url: '/songsIndex'      ,
    templateUrl: 'js/ng-views/songsIndex.html'  ,
    controller: 'songsIndexController'          ,
    controllerAs: 'vm'
  })
}

function songsRootControllerFunction(){
  console.log('you have entered the songsRootControllerFunction');
}

function songsIndexControllerFunction( $firebaseArray ) {
  let ref = firebase.database().ref().child( 'songs' )
  this.songs = $firebaseArray( ref )
}


//   .state('songShow', {
//     url: '/songs/:id',
//     templateUrl: 'js/ng-views/show.html',
//     controller: 'songShowController',
//     controllerAs: 'vm'
//   })
//   .state('songEdit', {
//     url: '/songs/:id/edit',
//     templateUrl: 'js/ng-views/edit.html',
//     controller: 'songEditController',
//     controllerAs: 'vm'
//   })
// }
// function songFactoryFunction( $resource ) {
//   return $resource('http://localhost:3000/songs/:id', {}, {
//     update: { method: 'PUT' }
//   })
// }
//

// function songNewControllerFunction( songFactory, $state ) {
//   this.song = new songFactory()
//   this.create = function() {
//     this.song.$save(function(song) {
//       $state.go('songShow', {id: song.id})
//     })
//   }
// }
//
// function songShowControllerFunction( songFactory, $stateParams ) {
//   this.song = songFactory.get({id: $stateParams.id})
//   console.log(this.song)
// }
//
// function songEditControllerFunction( songFactory, $stateParams, $state ) {
//   this.song = songFactory.get({id: $stateParams.id})
//   this.update = function() {
//     this.song.$update({id: $stateParams.id}, function(song) {
//       $state.go('songShow', {id: song.id})
//     })
//   }
//   this.destroy = function(){
//     this.song.$delete({id: $stateParams.id}, function() {
//       $state.go('songIndex')
//     })
//   }
// }
