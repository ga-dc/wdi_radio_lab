"use strict";

(function () {
    angular
        .module("wdiRadio", [
            "ui.router",
            "songs"
        ])
        .config([
            "$stateProvider",
            RouterFunction
        ]);

    function RouterFunction($stateProvider) {
        console.log("Router Function Called");
        $stateProvider
            .state("songIndex", {
                url: "/songs",
                templateUrl: "js/songs/index.html",
                controller: "SongIndexController",
                controllerAs: "SongIndexViewModel"
            })
            .state("welcome", {
                url: "",
                templateUrl: "js/songs/welcome.html",
                controller: "SongWelcomeController",
                controllerAs: "SongWelcomeViewModel"
            })
    }
}());