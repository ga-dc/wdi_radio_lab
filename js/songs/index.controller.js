(function(){
    "use strict";
    
    angular
        .module("songs")
        .controller("SongIndexController", [
            "SongFactory",
            "$sce",
            SongIndexControllerFunc
        ]);

    function SongIndexControllerFunc(SongFactory, $sce){
        this.songs = SongFactory.query(function(response){
            response.forEach(function(song){
                song.audio_url = $sce.trustAsResourceUrl(song.audio_url);
            });
        });

    }
})();
