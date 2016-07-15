"use strict";

(function(){
  angular
    .module("wdiRadio", // the main app
    [ // And it's dependencies
      "ui.router",
      "firebase",
      "songs"
    ])
    .config( // What defines the routes used by the app
      "$stateProvider",
      RouterFunction
    ])

    function RouterFunction($stateProvider){
      $stateProvider
        .state("Welcome", { // Route if the user just goes to the "home page"
          url: "", // If there's nothing "extra" on the url
          templateUrl: "js/welcome.html" // Use a welcome templateUrl
                                         // no controller needed here,
                                         // it's just a splash page
        })
        .state("songs", { // Route to the songs index
          url: "/songs", // If the URL ends in /songs
          templateUrl: "js/songs/index.html", // Use a songs index url
          controller: "SongsIndexController", // The controller for songs
          controllerAs: "SongsIndexViewModel" // Controller alias
        })
    }
}());
