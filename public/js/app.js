angular
  .module("wdiradio", ["ui.router", "ngResource"])
  .config(["$stateProvider", RouterFunction])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("SongsIndexControllerIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html"
      controller: "SongsIndexController",
      controllerAs: "vm"
    })
  }
