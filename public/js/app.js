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
       this.songs.$remove(song)
     }
   }

})(); // The end.
