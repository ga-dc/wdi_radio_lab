angular
  .module("songs", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    Router
  ])
  .controller("SongsIndexController", [
    SongsIndexControllerFunction
  ])

function Router($stateProvider, $locationProvider){
  $locationProvider.html5Mode(true)
  // add to index.html --> "<base href="http://localhost:8080/" />"
  $stateProvider
    .state("songsIndex", {
      url: "/songs",
      controller: "SongsIndexController",
      controllerAs: "vm",
      templateUrl: "js/ng-views/index.html"
    })
    .state("songsShow", {
      url: "/songs/:id",
      controller: "SongsShowController",
      controllerAs: "vm",
      templateUrl: "js/ng-views/show.html"
    })
}

function SongsIndexControllerFunction(){

}
