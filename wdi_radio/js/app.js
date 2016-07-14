"use strict";

(function(){
  angular
    .module("radio", ["ui.router", "songs"])
    .config(["$stateProvider", RouterFunction])

    function RouterFunction($stateProvider){
      $stateProvider
      .state ("songMain", {
        url: "/",
        templateUrl: "js/songs/main.html"
      })
      .state ("songIndex", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongIndexController",
        controllerAs: "SongIndexViewModel"
      })

    }

})();
