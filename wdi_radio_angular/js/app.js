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
  ])
  .controller("SongShowController", [
    "SongFactory",
    "$stateParams",
    SongShowControllerFunction
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
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "SongShowController",
      controllerAs: "vm"
    })
  }

    function SongFactoryFunction($resource){
      return $resource( "http://127.0.0.1:3000/songs/:id", {}, {
        update: {method: "PUT"}
      });
    }

    function SongIndexControllerFunction(SongFactory){
      this.songs = SongFactory.query();
    }
    function SongNewControllerFunction(SongFactory) {
      this.song = new SongFactory()
      this.create = function(){
        this.song.$save()
      }
    }

    function SongShowControllerFunction(SongFactory, $stateParams){
      this.song = SongFactory.get({id: $stateParams.id});
    }

    function SongEditControllerFunction(SongFactory, $stateParams) {
      this.song = SongFactory.get({id: $stateParams.id});
      this.update = function(){
        debugger;
        this.song.$update({id: $stateParams.id});
      }
      this.destroy = function(){
        this.song.$delete({id: $stateParams.id});
      }
    }
