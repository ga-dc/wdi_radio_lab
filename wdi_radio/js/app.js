angular
  .module("wdiRadio", [
    "ui.router"
  ])

  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("radioWelcome", {
      url: "/",
      templateUrl: "wdi_radio/index.html",
      controller: "RadioWelcomeController",
      controllerAs: "vm"
    })

    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "songIndexController",
      controllerAs: "vm"

    })
  }
