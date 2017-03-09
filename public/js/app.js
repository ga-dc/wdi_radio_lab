"use strict";

angular.module("wdiradio", [
  "ui.router",
  "firebase"
])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("RadioIndexController", [RadioIndexControllerFunc])
  .controller("RadioShowController", ["$firebaseArray", RadioShowControllerFunc])

function RadioIndexControllerFunc(){

};

function RadioShowControllerFunc($firebaseArray){
  let ref = firebase.database().ref().child("songs");
      this.songs = $firebaseArray(ref);
      this.newSong = {}

      this.create = function(){
        this.songs.$add(this.newSong).then( () => this.newSong = {} )
      }
      this.delete = function(song){
        this.songs.$remove(song);
      }
};


  function RouterFunction($stateProvider){
    $stateProvider
      .state("radioIndex", {
        url: "",
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

  };
