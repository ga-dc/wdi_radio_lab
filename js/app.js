"use strict";

(function (){
  angular
    .module("wdiRadio", [
      "ui.router",
      "ngResource"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])
    .factory("SongFactory", SongFactoryFunc)
    .controller("SongIndexController", SongIndexControllerFunc)
    .controller("SongShowController",  SongShowControllerFunc)


    function RouterFunction($stateProvider){
      $stateProvider
        .state("home", {
          url: "",
          template: "Welcome to the Best Song App in the World"
        })
        .state("songsIndex", {
          url: "/songs",
          templateUrl: "js/index.html",
          controller: "SongIndexController",
          controllerAs: "SongIndexViewModel"
        })
        .state("songShow", {
          url: "/songs/:id",
          templateUrl: "js/show.html",
          controller: "SongShowController",
          controllerAs: "SongShowViewModel"
        })
    }

    SongFactoryFunc.$inject = ["$resource"]
    function SongFactoryFunc($resource) {
      return $resource("http://localhost:3000/songs/:id", {}, {
        update: {method:  "PUT"}
      });
    }

    SongIndexControllerFunc.$inject = ["SongFactory"]
    function SongIndexControllerFunc (SongFactory){
      this.songs = SongFactory.query();
    }

    SongShowControllerFunc.$inject = ["SongFactory", "$stateParams"]
    function SongShowControllerFunc (SongFactory, $stateParams) {
      this.song = SongFactory.get({id: $stateParams.id});
    }
}());
