"use strict";

// My IIFE be like ooh, ahh
(function() {

  /*
   * Angular App!
   */
  angular
  .module("wdiradio", [
    "ui.router",
    "ngResource",
    "firebase"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    RouterFunction
  ])
  .controller("RadioIndexController", [
    RadioIndexControllerFunction
  ])
  .controller("RadioShowController", [
    "$stateParams",
    "$firebaseArray",
    RadioShowControllerFunction
  ])

  /*
   * Router Function!
   */
  function RouterFunction($stateProvider, $locationProvider) {
    // Mmm, gimme that html5 mode
    // $locationProvider.html5Mode(true)

    // Providing some states
    $stateProvider
    .state("radioIndex", {
      url: "/",
      templateUrl: "js/ng-views/index.html",
      controller: "RadioIndexController",
      controllerAs: "vm"
    })
    .state("radioShow", {
      url: "/songs",
      templateUrl: "js/ng-views/show.html",
      controller: "RadioShowController",
      controllerAs: "vm"
    })
  }

  /*
   * Index Controller Function!
   */
  function RadioIndexControllerFunction() {

  }

  /*
   * Show Controller Function!
   */
  function RadioShowControllerFunction($stateParams, $firebaseArray) {
    // These most firey of base objects
    //  let ref = firebase.database().ref().child(`songs/${$stateParams.id}`)
    //  $firebaseObject(ref).$loaded().then(song => this.song = song)

    // Get that nice firebase reference
    let ref = firebase.database().ref().child("songs")
    this.songs = $firebaseArray(ref)

    this.create = function() {
      this.songs.$add(this.newSong).then( () => this.newSong = {} )
    }

    this.update = function(song) {
      this.songs.$save(song)
    }

    this.delete = function(song) {
      if (confirm(`Are you sure you want to delete ${song.title}?`)) {
        this.songs.$remove(song)
      }
    }

    this.play = function(song) {
        $('audio source').attr("src", song.audio_url)
        /****************/
        $('audio')[0].pause();
        $('audio')[0].load();//suspends and restores all audio element

        //audio[0].play(); changed based on Sprachprofi's comment below
        $('audio')[0].oncanplaythrough = $('audio')[0].play();
    }

  }

})(); // The end.
