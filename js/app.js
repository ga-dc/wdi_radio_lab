"use strict";

(function(){
  angular
  .module("radio-app",[
    "ui-router",
    "songs"
  ])
  .config("$stateprovider",[
    RouterFunction
  ]);

function RouterFunction($stateprovider){
  $stateprovider
  .state("SongsIndex", {
    url:         "/songs",
    templateUrl: "js/songs/index.html",
    controller:  "SongIndexController",
    controllerAs:"SongIndexViewModel"
  });
}

})();
