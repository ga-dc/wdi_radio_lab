"use strict";

angular
  .module("radio", ["ui.router", "ngResource"])
  .config(["$stateProvider", RouterFunction])
  .factory("SongFactory", ["$resource", SongFactoryFunction])
  .controller("SongIndexController", ["SongFactory", SongIndexControllerFunction]);



  function RouterFunction($stateProvider){
    console.log("Bye")
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "SongIndexController",
      controllerAs: "vm"
    })}





function SongIndexControllerFunction(SongFactory){
  this.songs = SongFactory.query();
  console.log("Hello")
}

function SongFactoryFunction($resource){
  return $resource("http://localhost:3000/songs/:id.json")
}
