
(function(){
angular
  .module("WdiRadio", ["ui.router"])
  .config(["$stateProvider", RouterFunction])
  .controller("WdiRadioIndexController", [ "WdiRadioFactory", WdiRadioIndexControllerFunction])
  // .controller("WdiRadioShowController", ["WdiRadioFactory", "$stateParams", WdiRadioShowControllerFunction])
  .factory("WdiRadioFactory", [WdiRadioFactoryFunction]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("WdiRadioIndex", {
      url: "/",
      templateUrl: "js/ng-views/index.html",
      controller: "WdiRadioIndexController",
      controllerAs: "vm"
    });
  //   .state("WdiRadioShow", {
  //     url: "/songs",
  //     templateUrl: "js/ng-views/show.html",
  //     controller: "WdiRadioShowController",
  //     controllerAs: "vm"
  //   });
  // }

  function WdiRadioIndexControllerFunction(){
    this.songs = WdiRadioFactory.query();
  }

  function RouterFunction($stateProvider){
    console.log('Router setup correctly')
  }

  })();
