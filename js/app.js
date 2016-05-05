"use strict";

(function(){
  angular
  .module("radio", ["ui.router", "ngResource"])
  .config(["$stateProvider", RouterFunction])

  .controller("RadioIndexController", ["SongFactory", RadioIndexControllerFunc])
  .controller("RadioShowController", ["SongFactory", RadioShowControllerFunc])
  .controller("buttonController")
  .factory("SongFactory", ["$resource", SongFactoryFunc]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("radioHome", {
      url: "/",
      templateUrl: "js/songs/home.html",
    })
    .state("radioIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "RadioIndexController",
      controllerAs: "indexVm"})

    .state("radioShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "RadioShowController",
      controllerAs: "showVm"});
  }


  // SongFactoryFunc.$inject = [ "$resource"];
  function SongFactoryFunc($resource) {
    return $resource("http://localhost:3000/songs/:id");
  }


  RadioIndexControllerFunc.$inject = [ "SongFactory" ];
  function RadioIndexControllerFunc(SongFactory){
    var indexVm = this;
    indexVm.songs = SongFactory.query();
    indexVm.newSong = new SongFactory();

    indexVm.create = function($state){
      indexVm.newSong.$save().then(function(res) {
        indexVm.songs.push(res)
      })
    };
  }

  RadioShowControllerFunc.$inject = [ "SongFactory", "$stateParams"];
  function RadioShowControllerFunc( SongFactory, $stateParams){
    var showVm = this;
    showVm.song = SongFactory.get({id: $stateParams.id});
  };


})();
