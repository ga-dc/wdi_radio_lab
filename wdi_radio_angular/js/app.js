angular
  .module("pinkfloyd", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("SongFactory", [
    "$resource",
    SongFactoryFunction
  ])
  .controller("SongIndexController", [
    "SongFactory",
    SongIndexControllerFunction
  ])
  .controller("SongNewController", [
    "SongFactory",
    SongNewControllerFunction
  ])
  .controller("SongEditController", [
    "SongFactory",
    "$stateParams",
    SongEditControllerFunction
  ]);



  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "SongIndexController",
      controllerAs: "vm"
    })
    .state("songNew", {
      url:"/songs/new",
      templateUrl:"js/ng-views/new.html",
      controller:"SongNewController",
      controllerAs:"vm"
    })
    .state("songEdit", {
      url:"/songs/:id/edit",
      templateUrl:"js/ng-views/edit.html",
      controller:"SongEditController",
      controllerAs:"vm"
    })
  }
    function SongFactoryFunction($resource){
      return $resource( "http://localhost:3000/songs.json", {}, {});
    }

    function SongIndexControllerFunction(SongFactory){
      this.songs = SongFactory.query();
    }

    function SongEditControllerFunction(SongFactory, $stateParams) {
      this.song = SongFactory.get({id: $stateParams.id});
      this.update = function(){
      this.song.$update({id: $stateParams.id});
      }
      this.destroy = function(){
        this.grumble.$delete({id: $stateParams.id});
      }
    }

    function SongNewControllerFunction(SongFactory) {
      this.song = new SongFactory();
      this.create = function(){
        this.song.$save();
      }
    }
