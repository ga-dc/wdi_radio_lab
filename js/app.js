"use strict";

(function(){
  angular
    .module("wdiradio", ["ui.router", "ngResource"])
    .directive("musicPlayer", function(){
      return {
        templateUrl: "js/_music-player.t.html"
      }
    })
    .config(['$stateProvider', RouterFunction])
    .controller("songIndexController", songIndexController)
    .controller("songEditController", songEditController)
    .factory("songFactory", songFactory)

    function RouterFunction($stateProvider){
      $stateProvider
      .state("welcome", {
        url: "/",
        template: "<h3>Welcome to WDI Radio! Go look at songs in the index!</h3>"
      })
      .state("songIndex", {
        url: "/songs",
        templateUrl: "js/index.t.html",
        controller: "songIndexController",
        controllerAs: "indexVM"
      })
      .state("songEdit", {
        url: "/song/:id/edit",
        templateUrl: "js/edit.t.html",
        controller: "songEditController",
        controllerAs: "editVM"
      })
    };

    songFactory.$inject = ["$resource"];
    function songFactory($resource){
      return $resource("http://localhost:3000/songs/:id.json", {}, {
        update: {method: "PUT"}
      });
    };

    songIndexController.$inject = ["songFactory", "$sce"];
    function songIndexController(songFactory, $sce){
      var indexVM = this;
      indexVM.songs = songFactory.query();
      indexVM.newSong = '';
      indexVM.newSong = new songFactory();
      indexVM.addSong = function(){
        indexVM.newSong.$save().then(function(res){
          indexVM.songs.push(res)
        })
      }
      indexVM.setSong = function(currentSongUrl){
        indexVM.trustedUrl = $sce.trustAsResourceUrl(currentSongUrl);
      }
    };

    songEditController.$inject = ["songFactory", "$stateParams", "$location"];
    function songEditController(songFactory, $stateParams, $location){
        var editVM = this;
        editVM.song = songFactory.get({id: $stateParams.id});
        editVM.editSong = function() {
          editVM.song.$update({id: $stateParams.id});
          $location.path("/songs")
        }
        editVM.deleteSong = function(){
          editVM.song.$delete({id: $stateParams.id});
          $location.path("/songs")
        }
    };
})();
