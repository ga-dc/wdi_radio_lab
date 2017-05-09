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
      controller: "RadioWelcomeController",
      controllerAs: "vm"
    })

    .state("songIndex", {
      url: "/songs",
      controller: "songIndexController",
      controllerAs: "vm"

    })
  }
