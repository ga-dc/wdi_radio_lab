angular
.module("wdiradio", ["ui.router", "ngResource"])
.config(["$stateProvider", RouterFunction])
.controller("wdiradioIndexController", ["wdiRadioFactory", wdiradioIndexControllerFunction])
.controller("wdiradioSongsController", ["wdiRadioFactory", "$stateParams", wdiradioSongsControllerFunction])
.controller("wdiradioNewController", ["$state", "wdiRadioFactory", wdiradioNewControllerFunction])
.factory("wdiRadioFactory",["$resource", FactoryFunction])


function RouterFunction($stateProvider) {
  $stateProvider
  .state("wdiRadioIndex", {
    url: "",
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
  .state("wdiRadioNew", {
    url: "/songs/new",
    templateUrl: "js/ng-views/new.html",
    controller: "wdiradioNewController",
    controllerAs: "vm"
  })
  .state("wdiRadioSongsShow", {
    url: "/songs/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "wdiradioSongsController",
    controllerAs: "vm"
  })

}

function wdiradioIndexControllerFunction( wdiRadioFactory) {
  this.songs = wdiRadioFactory.query()
}

function wdiradioNewControllerFunction( $state, wdiRadioFactory ){
  this.song = new wdiRadioFactory();
  this.create = function(){
    this.song.$save().then(()=>{
      $state.go("wdiRadioSongs")
    })
  }
}

function wdiradioSongsControllerFunction(wdiRadioFactory, $stateParams) {
  this.song = wdiRadioFactory.get({id: $stateParams.id});
}

function FactoryFunction( $resource ){
  return $resource( "http://localhost:3000/songs/:id");
}
