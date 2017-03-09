
angular
  .module("wdi_radio", [
    "ui.router"
  ])
  .config(["$stateProvider",
    RouterFunction
  ])
  .controller("SongIndexController", [
    SongIndexControllerFunction
  ])


function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "SongIndexController",
    controllerAs: "vm"
  })
}


function SongIndexControllerFunction() {
  console.log("hello World")
}
