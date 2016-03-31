"use strict";

(function(){
  angular
  .module("songs")
  .directive("songListen", [
    "$state",
    SongListenDirectiveFunction
  ])
  function SongListenDirectiveFunction($state){
    return{
      templateUrl: "js/radio/listen.html",
      scope: {
        song: "="
      },
      link: function(scope){
        scope.song.url = "{{SongShowViewModel.song.audio_url}}";
        // scope.song.pauseOrPlay = function(ele){
          // var audio = angular.element(ele.srcElement);
          // audio[0].pause(); // audio.play()
          // var audio = document.createElement(audio);
          var audio = document.querySelector("#audio");
        function playAudio() {
          audio.play();
        }
        function pauseAudio() {
          audio.pause();
        }
        function rewindAudio() {
          audio.currentTime = 0;
        }
          audio.src = $scope.song.audio_url;
          // audio[0].pause();
          $element.appendChild(audio);
        // };
      }
    };
  };
}());
