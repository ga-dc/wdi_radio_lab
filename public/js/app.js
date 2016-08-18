"use strict";

(function () {
    angular
        .module("radio", [
            "ui.router",
            "songs"
        ])
        .config([
            "$stateProvider",
            RouterFunction
        ]);

    function RouterFunction($stateProvider) {
        $stateProvider
            .state("radioWelcome", {
                url: "/",
                templateUrl: "js/welcome.html"
            })
    }
}());