(function(){
    "use strict";

    angular
        .module("songs")
        .directive("songShow", songShowFunc);

    function songShowFunc(){
        return {
            templateUrl: "js/views/_song_show.html",
            replace: true,
            scope: {
                song: '='
            }
        };
    }

})();
