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
  ])
  .directive("songForm", [
    "Song",
    songFormFunction
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
      url: "/songs",
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
    indexVM.newSong = new Song();
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

  function songFormFunction(Song){
    return{
      templateUrl: "song.form.html",
      scope: {
        destination: "=",
        formMethod: "@"
      },
      link: function(scope){
        scope.create = function(){
          Song.save(scope.song, function(response){
            Song.all.push(response);
          });
        }
        scope.update = function(){
          Song.update({id: scope.song.id}, scope.song, function(response){
            console.log("success");
          });
        }
      }
    }
  }
}());
