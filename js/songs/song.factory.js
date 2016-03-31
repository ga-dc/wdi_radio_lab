(function(){
    "use strict";

    angular
        .module("songs")
        .factory("SongFactory", [
            "$resource",
            SongFactoryFunc
        ]);

    function SongFactoryFunc($resource) {
        return $resource("http://localhost:3000/songs/:id");
    }

})();
