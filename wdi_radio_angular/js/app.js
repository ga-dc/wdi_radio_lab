angular
.module("radioApp", ["ui.router", "ngResource"])
.config(["$stateProvider", RouterFunction])
.controller("SongsIndexController",["SongsFactory", SongsIndexControllerFunction])
.factory("SongsFactory", ["$resource", SongsFactoryFunction])


function RouterFunction($stateProvider){
  console.log("Router Working")
  $stateProvider
  // .state("root",{
  //   url: "/",
  //   templateUrl: "index.html",
  //   controller: "RootController",
  //   controllerAs: "vm"
  // })
  .state("songsIndex",{
    url: "/songs",
    templateUrl: "js/ng-views/songs-index.html",
    controller: "SongsIndexController",
    controllerAs: "vm"
  })
}


function SongsIndexControllerFunction(SongsFactory){
  console.log("Controller Working")
  this.songs = SongsFactory.query()
}

function SongsFactoryFunction($resource){
  return $resource( "http://localhost:3000/songs/:id" );
}
