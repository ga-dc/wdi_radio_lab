angular
    .module("wdi-radio", [
      "ui.router",
      "songs"
    ])
    .config([
      "$stateProvider",
      Router])

  function Router($stateProvider){
    $stateProvider
    .state("index",{
      url: "/songs",
      controller: "songsIndexController",
      conrollerAs: "vm"
    })


    }
