angular
  .module("radioApp", [
    "firebase",
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("radioIndexController", [
    "$firebaseArray",
    radioControllerFunction
  ])
  .controller("radioShowController", [
    "$stateParams",
    "$firebaseObject",
    radioShowControllerFunction
  ])

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("radioIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "radioIndexController",
      controllerAs: "vm"
    })
    .state("radioShow", {
      url: "/songs/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "radioShowController",
      controllerAs: "vm"
    })
  }

  function radioControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("songs");
    // $firebaseArray(ref).$loaded().then(songs => this.songs = songs);
    this.songs = $firebaseArray(ref);

    this.create = function() {
      this.songs.$add(this.newSong).then( () => this.newSong = {} )
    }
    this.delete = function(song) {
      this.songs.$remove(song)
    }
  }

  function radioShowControllerFunction($stateParams, $firebaseObject) {
    let ref = firebase.database().ref().child("songs/" + $stateParams.id)
    $firebaseObject(ref).$loaded().then(song => this.song = song)

    this.update = function() {
      console.log('hey, yall');
      this.song.$save();
    }
  }

  // $sce for show controller, to get the songs to play
  // need to define
  // add a new property to a song called trusted url and make it a trusted url
  // write trusted url, song.trustedUrl = $sce.trustedResourceUrl(song.audio_url)
