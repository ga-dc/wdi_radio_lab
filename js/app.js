"use strict";

(function(){
  angular
  .module("webradio", [
    "ui.router",
    "songs",
    // "ui.bootstrap"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

function RouterFunction($stateProvider){
  $stateProvider
    .state("webradioIndex", {
    url: "/webradio",
    templateUrl: "js/webradio/index.html",
    controller: "WebradioIndexController",
    controllerAs: "WebradioIndexViewModel"
  })
.state("songIndex", {
  url: "/songs",
  templateUrl: "/js/songs/index.html",
  controller:"SongIndexController",
  controllerAs: "SongIndexViewModel"
})

}
})();
