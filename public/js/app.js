angular
  .module("wdiradio",[
    "ui.router",
    firebase

  ])
  .config(["$stateProvider", "firebase", RoutingFunction])
  .controller("WdiradioController", [WdiradiosControllerFunction])


function RoutingFunction($stateProvider){

  $stateProvider
    .state("wdiradiosIndex",{
      url: "/",
      templateUrl: "wdiradios-index.html",
      controller: "WdiradioController",
      controllerAs: "vm"
    })
}
