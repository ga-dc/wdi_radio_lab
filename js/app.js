(function(){
    "use strict";

    angular
        .module("radio", [
            "ui.router"
        ])
        .config([
            "$stateProvider",
            RouterFunction
        ]);

    function RouterFunction($stateProvider) {
        $stateProvider
            .state("songIndex", {
                url: "/songs",
                templateUrl: "js/songs/index.html",
                controller: "SongIndexController",
                controllerAs: "SongIndexViewModel"
            })
            .state("root", {
                url: '/',
                templateUrl: "js/index.html"
            });
    }

})();
