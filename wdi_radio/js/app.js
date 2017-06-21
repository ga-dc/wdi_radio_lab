angular
.module("wdiradio", ["ui.router", "ngResource"])
.config(["$stateProvider", RouterFunction])
.controller("wdiradioIndexController", ["wdiRadioFactory", wdiradioIndexControllerFunction])
.factory("wdiRadioFactory",["$resource", FactoryFunction])


function RouterFunction($stateProvider) {
  $stateProvider
  .state("wdiRadioIndex", {
    url: "/",
    templateUrl: "js/ng-views/index.html",
    controller: "wdiradioIndexController",
    controllerAs: "vm"
  })
  .state("wdiRadioSongs", {
    url: "/songs",
    templateUrl: "js/ng-views/songs.html",
    controller: "wdiradioIndexController",
    controllerAs: "vm"
  })

}

function wdiradioIndexControllerFunction( wdiRadioFactory) {
  this.songs = wdiRadioFactory.query()
}

function FactoryFunction( $resource ){
  return $resource( "http://localhost:3000/songs.json");
}
