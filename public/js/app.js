var app = angular.module("songs", ["ui.router"])
app.controller("SongsIndexController", function(){
  console.log("we're in the songs index!")
})
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
