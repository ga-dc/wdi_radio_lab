"use strict";

(function(){
  angular
  .module("wdiradio", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("Song", [
    "$resource",
    songFactoryFunction
  ])
  .controller("welcomeCtrl", [
    welcomeCtrlFunction
  ])
  .controller("indexCtrl", [
    "Song",
    indexCtrlFunction
  ])
  .controller("showCtrl", [
    "Song",
    "$stateParams",
    showCtrlFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "songs.welcome.html",
      controller: "welcomeCtrl",
      controllerAs: "welcomeVM"
    })
    .state("index", {
      url: "/songs/index",
      templateUrl: "songs.index.html",
      controller: "indexCtrl",
      controllerAs: "indexVM"
    })
    .state("show", {
      url: "/:id",
      templateUrl: "songs.show.html",
      controller: "showCtrl",
      controllerAs: "showVM"
    });
  }

  function songFactoryFunction($resource){
    var Song = $resource("http://localhost:3000/songs/:id", {}, {
      update: {method: "PUT"}
    });
    Song.all = Song.query();
    return Song;
  }

  function welcomeCtrlFunction(){
    return{};
  }

  function indexCtrlFunction(Song){
    var indexVM = this;
    indexVM.songs = Song.all;
  }

  function showCtrlFunction(Song, $stateParams){
    var showVM = this;
    Song.all.$promise.then(function(){
      Song.all.forEach(function(song){
        if(song.id == $stateParams.id){
          showVM.song = song;
        }
      });
    });
  }


}());
