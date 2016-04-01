(function(){
  angular
  .module("wdiRadio", [
    "ui.router",
    "songs",
    "SongsNewController"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "songIndexController",
      controllerAs: "songIndexViewModel"
    }).state("newIndex",{
      url: "/songs/new",
      templateUrl: "js/songs/new.html",
      controller: "SongsNewController",
      controllerAs: "songNewViewModel"
    })
  }
}());
