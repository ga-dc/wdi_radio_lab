(function(){

  angular.module("songs", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    function($stateProvider) {
      $stateProvider
      .state("index", {
        url: "/",
        templateUrl: "songs.index.html"
      })
      .state("show", {
        url: "/:id",
        template: "<song-info data-song='vm.song'></song-info>",
        controller: "showCtrl",
        controllerAs: "vm"
      });
    }
  ])
  .controller("indexCtrl", [
    "Song",
    function(Song){
      var vm = this;
      vm.songs = Song.all;
    }
  ])
  .controller("showCtrl", [
    "Song",
    "$stateParams",
    function (Song, $stateParams){
      var vm = this;
        Song.all.forEach(function(song){
          if(song.id == $stateParams.id){
            vm.song = song;
          }
        });
    }
  ])
  .factory("Song", [
    "$resource",
    function($resource){
      var Song = $resource("http://localhost:3000/songs.json", {}, {
        update: {method: "PUT"}
      });
      Song.all = Song.query();
      return Song;
    }
  ])
  .directive("songInfo", [
    "Song",
    function(Song){
      return{
        templateUrl: "_song_info.html",
        scope: {
          song: '='
        }
      };
    }
  ]);
})();
