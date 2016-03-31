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
          url: "/:id"
        });
      }
  ])
  .controller("songsCtrl", [
    "Song",
    function(Song){
      var vm = this;
      vm.songs = Song.all;
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
