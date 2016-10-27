angular
  .module("radioApp", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .controller("radioWelcomeController", [
    "$scope",
    radioWelcomeControllerFunction
  ])
  .controller("radioSongsController", [
    "$scope",
    "$firebaseArray",
    radioSongsControllerFunction
  ])
  .controller("radioShowSongController", [
    "$scope",
    "$stateParams",
    "$firebaseObject",
    "$state",
    radioShowSongControllerFunction
  ])
  // .controller("radioNewController", [
  //   "$scope",
  //   radioNewControllerFunction
  // ])


  function radioWelcomeControllerFunction($scope){

  }
  function radioSongsControllerFunction($scope, $firebaseArray){
    let ref = firebase.database().ref().child("radio")
    $scope.songs = $firebaseArray(ref);
    console.log($firebaseArray(ref));
    // $scope.showForm = function (){
    //   $scope.formIs
    // }
    // $scope.create = function(){
    //   $scope.songs.$add($scope.newSong).then(() => $scope.newSong = {})
    // }
  }
  function radioShowSongControllerFunction($scope, $stateParams, $firebaseObject, $state){
    let ref = firebase.database().ref().child("radio/" + $stateParams.id)
    $firebaseObject(ref).$loaded().then(song => $scope.song = song)

    $scope.update = function(){
      $scope.song.$save()
    }
    $state.go("songs")
  }

  function Router($stateProvider){
    console.log("routing!");
    $stateProvider
    .state("welcome", {
      url: "/",
      controller: 'radioWelcomeController',
      templateUrl: 'js/ng-views/welcome.html'
    })
    .state("songs", {
      url: '/songs',
      controller: 'radioSongsController',
      templateUrl: 'js/ng-views/songs.html'
    })
    .state("showSong", {
      url: "/songs/:id",
      controller: "radioShowSongController",
      templateUrl: "js/ng-views/showsong.html"
    })
  }
