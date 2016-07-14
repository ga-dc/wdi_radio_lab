"use strict";

(function(){
  angular
    .module("radio", ["ui.router", "songs"])
    .config(["$stateProvider", RouterFunction])

    function RouterFunction($stateProvider){
      $stateProvider
      .state ("songIndex", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongIndexController",
        controllerAs: "SongIndexViewModel"
      })

    }

})();
