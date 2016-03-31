"use strict";


(function()){
  angular
    .module("songs")
    .controller("SongIndexController",[
      SongIndexControllerFunction
    ]);

  function SongIndexController(){
    console.log("I'm in the controller")
  }



})();
