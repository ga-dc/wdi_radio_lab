
angular
.module("wdiRadioApp", [
  "ui.router",
  "ngResource"
])
.controller("SongIndexController",[
  "SongFactory",
  SongIndexControllerFunction
])
.config(["$stateProvider", RouterFunction])
.factory("SongFactory",[
  "$resource",
  SongFactoryFunction
]);

function SongFactoryFunction($resource){
  return $resource ("http://localhost:3000/songs/:id");
}

function SongIndexControllerFunction (SongFactory){
  this.songs = SongFactory.query();
}

function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex",
    {url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "SongIndexController",
    controllerAs: "vm"
    })
  .state("songShow",
    {url: "/songs/:id",
    templateUrl: "js/ng-views/show.html",
    });
}
