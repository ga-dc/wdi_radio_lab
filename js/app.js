(function(){

  angular.module("songs", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);


  function RouterFunction($stateProvider) {
    $stateProvider
    .state("index", {
      url: "/",
      template: "/songs.index.html"
    })
    .state("show", {
      url: "/:id"
    });
  }




})();
