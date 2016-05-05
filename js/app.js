"use strict";

(function(){
  angular
  .module("wdiradio", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("WelcomeController", WelcomeControllerFunc)
  .controller("IndexController", IndexControllerFunc)
  .controller("ShowController", ShowControllerFunc)
  .factory("SongFactory", SongFactoryFunc);

  SongFactoryFunc.$inject = ["$resource"];
  function SongFactoryFunc($resource){
    return $resource("http://localhost:3000/songs/:id.json", {}, {
      update: {method: "PUT"}
    });
  }


  function RouterFunction($stateProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "js/welcome.template.html",
      controller: "WelcomeController",
      controllerAs: "welcomeVm"
    })
    .state("indexSongs", {
      url: "/songs",
      templateUrl: "js/index.template.html",
      controller: "IndexController",
      controllerAs: "indexVm"
    })
    .state("showSongs", {
      url: "/songs/:id",
      templateUrl: "js/show.template.html",
      controller: "ShowController",
      controllerAs: "showVm"
    });
  }

  WelcomeControllerFunc.$inject = ["$state"];
  function WelcomeControllerFunc($state) {
    var welcomeVm = this;
  }

  IndexControllerFunc.$inject = ["$state", "SongFactory"];
  function IndexControllerFunc($state, SongFactory) {
    var indexVm = this;
    indexVm.songs = SongFactory.query();
    indexVm.newSong = new SongFactory();

    indexVm.create = function() {
      indexVm.newSong.$save().then(function(){
        $state.go("indexSongs", {}, {reload: true});
      });
    };

  }

  ShowControllerFunc.$inject = ["$state", "$stateParams", "SongFactory"];
  function ShowControllerFunc($state, $stateParams, SongFactory) {
    var showVm = this;
    showVm.song = SongFactory.get({id: $stateParams.id});

    showVm.update = function() {
      showVm.song.$update({id: $stateParams.id});
    }


    showVm.delete = function() {
      showVm.song.$delete({id: $stateParams.id}).then(function() {
        $state.go("indexSongs", {}, {reload: true});
      });
    };
  };

})();
