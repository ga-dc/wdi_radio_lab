
var app = angular.module("songs", ["ui.router"])

app.config(["$stateProvider", RouterFunction])

function RouterFunction($stateProvider){
  $stateProvider
  .state("welcome", {
    url: "/",
    templateUrl: "ng-views/index.html"
  })
  .state("songsIndex", {
    url: "/songs",
    templateUrl: "ng-views/songs.html",
    controller: "SongsIndexController",
    controllerAs: "vm"
  })
}

app.controller("SongsIndexController", [SongsIndexControllerFunction])

function SongsIndexControllerFunction(){
  console.log("were in the songs index!")
}
