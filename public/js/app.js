angular
  .module("wdiRadio", [
    "firebase",
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://embed.spotify.com/**'
  ])
})
  .controller("SongsIndexController", [
    "$firebaseArray",
    SongsIndexControllerFunction
  ])
  .controller("SongsNewController", [
    "$firebaseArray",
    "$state",
    SongsNewControllerFunction
  ])
  .controller("SongsShowController", [
    "$firebaseObject",
    "$stateParams",
    SongsShowControllerFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
  .state("songsWelcome", {
    url: "",
    templateUrl: "../ng-views/welcome.html"
  })
  .state("songsIndex", {
    url: "/songs",
    templateUrl: "../ng-views/index.html",
    controller: "SongsIndexController",
    controllerAs: "vm"
  })
  .state("songsNew", {
    url: "/songs/new",
    templateUrl: "../ng-views/new.html",
    controller: "SongsNewController",
    controllerAs: "vm"
  })
  .state("songsShow", {
    url: "/songs/:id",
    templateUrl: "../ng-views/show.html",
    controller: "SongsShowController",
    controllerAs: "vm"
  })
}

function SongsIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
}

function SongsNewControllerFunction($firebaseArray, $state){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
  this.create = function(){
    this.songs.$add(this.newSong).then(() => this.newSong = {})
    $state.go("songsIndex");
  }
}

function SongsShowControllerFunction($firebaseObject, $stateParams){
  let ref = firebase.database().ref().child("songs/" + $stateParams.id);
  $firebaseObject(ref).$loaded().then(song => this.song = song);
}
