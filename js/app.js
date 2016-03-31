(function(){

  angular.module("songs", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    routerFunction
  ])
  .controller("songsCtrl", [
    "Song",
    songsCtrlFunction
  ])
  .factory("Song", [
    "$resource",
    songFactoryFunction
 ]);


  function routerFunction($stateProvider) {
    $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "songs.index.html"
    })
    .state("show", {
      url: "/:id"
    });
  }



  function songFactoryFunction($resource){
    var Song = $resource("http://localhost:3000/songs.json", {}, {
       update: {method: "PUT"}
     });
     Song.all = Song.query();


     return Song;
   }

   function songsCtrlFunction(Song){
     var vm = this;
     vm.songs = Song.all;
   }


})();
