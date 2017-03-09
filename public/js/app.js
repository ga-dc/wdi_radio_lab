"use strict";

angular
  .module("app", [
  "ui.router",
    "firebase"
])
 .config( ['$stateProvider',
 RouterFunction
 ])

 .controller("appController", [
   "$firebaseArray",
   appControllerFunction
 ])

 .controller("HomeController", [
   "GrumbleFactory",
   "$stateParams",
   HomeControllerFunction
 ])

 .controller("SongController", [
   "GrumbleFactory",
   "$stateParams",
   SongControllerFunction
 ])


 function IndexControllerFunction( GrumbleFactory ){
 this.grumbles = GrumbleFactory.query();
 }

   }
 function ShowControllerFunction(GrumbleFactory, $stateParams){
     this.grumble = GrumbleFactory.get({id: $stateParams.id});
   }







function appControllerFunction($firebaseArray) {
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
}
function  RouterFunction($stateProvider){
$stateProvider
 .state('home', {
   url: '/',
   templateUrl: 'templates/home.html',
   controller: function($scope) {
     $scope.title = "Home";
   }
 })
 .state('songs', {
   url: '/',
   templateUrl: 'templates/songs.html'
 })
}])
