"use strict";

(function(){
  angular
  .module("songs")
  .controller("showController", [
    "songFactory",
    "$stateParams",
    showControllerFunction
  ]);

  function showControllerFunction(songFactory, $stateParams, $scope, ngAudio){
    // $scope.song = ngAudio.load("sounds/mySound.mp3"); // returns NgAudioObject
    this.song = songFactory.get({id: $stateParams.id});
    // this.song = ngAudio.load({audio_url: $stateParams.audio_url});
  }
}());

// <div ng-controller='audioDemo'>
// <button ng-click='audio.paused ? audio.play() : audio.pause()'>Pause</button>
// <button ng-click='audio.restart()'>Stop</button>
// <button ng-click='audio.muting = !audio.muting'>Mute</button>
//
// <label>Current Time</label>
// <input class='form-control' type=text ng-model='audio.currentTime'>
// <label>Volume</label>
// <input class='form-control' type=range min=0 max=1 step=0.01 ng-model='audio.volume'>
// </div>
// <script>
// angular.module('myModule',['ngAudio'])
// .controller('audioDemo',function($scope,ngAudio){
//  $scope.audio = ngAudio.load('mySound.wav');
// })
// </script>
