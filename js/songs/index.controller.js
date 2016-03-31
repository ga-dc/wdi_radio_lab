(function(){
    "use strict";
    
    angular
        .module("songs")
        .controller("SongIndexController", [
            "SongFactory",
            SongIndexControllerFunc
        ]);

    function SongIndexControllerFunc(SongFactory){
        this.songs = SongFactory.query();
    }
})();
