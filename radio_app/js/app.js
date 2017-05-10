angular
.module("radioApp", [
  "ui.router"
])
.config([
  "stateProvider"
  RouterFunction
])
.controller("SongIndexController",[
  SongIndexControllerFunction
])
function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex",{
    url:"songs",
    templateUrl: "js/ng-views/index.html",
    controller: "SongIndexController",
    controllerAs: "vm"
  })
  .state("songShow",{
    url: "/songs/:id",
    templateUrl: "js/ng-views/show.html"
  })

  function SongIndexControllerFunction(){
    this.songs = []
  }
}
