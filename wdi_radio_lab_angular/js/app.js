
(function(){
angular
  .module("WdiRadio", ["ui.router", "ngResource"])
  .config(["$stateProvider", RouterFunction])
  .controller("WdiRadioIndexController", [ "WdiRadioFactory", WdiRadioIndexControllerFunction])
  .controller("WdiRadioShowController", ["WdiRadioFactory", "$stateParams", WdiRadioShowControllerFunction])
  .factory("WdiRadioFactory", ["$resource", WdiRadioFactoryFunction]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("WdiRadioIndex", {
      url: "/",
      templateUrl: "js/ng-views/index.html",
      controller: "WdiRadioIndexController",
      controllerAs: "vm"
    })
    .state("WdiRadioShow", {
      url: "/songs",
      templateUrl: "js/ng-views/show.html",
      controller: "WdiRadioIndexController",
      controllerAs: "vm"
    });
  }

  function WdiRadioIndexControllerFunction(WdiRadioFactory){
    console.log("hello")
    this.songs = WdiRadioFactory.query();
  }

  function WdiRadioShowControllerFunction(WdiRadioFactory, $stateParams){
    this.song = WdiRadioFactory.get({id: $stateParams.id});
  }

  function WdiRadioFactoryFunction($resource){
    return $resource("http://localhost:3000/songs")
  }

  })();
