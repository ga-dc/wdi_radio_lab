angular.module("songs")
       .controller("SongsIndexController", [
         "$sce",
         "$firebaseArray",
         "$firebaseObject",
         ControllerFunction
       ]);

       function ControllerFunction($sce, $firebaseArray, $firebaseObject ) {
         var ref = firebase.database().ref().child("songs");
         this.songs = $firebaseArray(ref);
         this.newsong = {};
         this.play = function(song) {
           this.playSong = songs;
           this.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url);
         };
       }
