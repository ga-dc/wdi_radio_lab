
angular
  .module("songlist",[
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("SongIndexController",[
    "SongFactory",
    SongIndexControllerFunction
  ])
  .factory("SongFactory",[
    "$resource",
    SongFactoryFunction
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

function SongIndexControllerFunction(SongFactory){
  this.songs = SongFactory.query()
}

function SongFactoryFunction( $resource ){
  return $resource( "http://localhost:3000/songs.json", {}, {});
}
