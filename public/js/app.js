angular
  .module("wdiradio", ["ui.router", "ngResource"])
  .config(["$stateProvider", RouterFunction])
  .factory("SongFactory", [
    "$resource",
    SongFactoryFunction
  ])
  .controller("SongsIndexController", [
    "SongFactory",
    SongsIndexControllerFunction
    ])
  .controller("SongShowController", [
    "SongFactory",
    "$stateParams",
    SongShowControllerFunction
  ])
  .controller("SongNewController", [
    "SongFactory",
    SongNewControllerFunction
  ])
  .controller("SongEditController", [
    "SongFactory",
    "$stateParams",
    SongEditControllerFunction
  ])

  // functions

  function RouterFunction($stateProvider){
    $stateProvider
    .state("SongsIndexControllerFunction", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "SongsIndexController",
      controllerAs: "vm"
    })
    .state("songNew", {
      url: "/songs/new",
      templateUrl: "js/ng-views/new.html",
      controller: "SongNewController",
      controllerAs: "vm"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "SongShowController",
      controllerAs: "vm"
    })
    .state("songEdit", {
      url: "/songs/:id/edit",
      templateUrl: "js/ng-views/edit.html",
      controller: "SongEditController",
      controllerAs: "vm"
    })
  }


  function SongFactoryFunction($resource){
    return $resource("http://localhost:3000/songs/:id.json", {}, {
      update: {method: "PUT"}
    });
  }

  function SongsIndexControllerFunction ( SongFactory ){
    this.songs = SongFactory.query();
  }

  function SongShowControllerFunction(SongFactory, $stateParams) {
    this.song = SongFactory.get({id: $stateParams.id});
  }

  function SongNewControllerFunction(SongFactory) {
    this.song = new SongFactory();
    this.create = function(){
      this.song.$save()
    }
  }

  function SongEditControllerFunction(SongFactory, $stateParams){
    this.song = SongFactory.get({id: $stateParams.id});
    this.update = function(){
      this.song.$update({id: $stateParams.id})
    }
  }

  // look up ng resource

// controllers
