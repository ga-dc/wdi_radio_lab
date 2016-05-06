"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongsShowController", [
      "SongFactory",
      "$stateParams",
      ControllerFunction
    ])

    function ControllerFunction(SongFactory, $stateParams){
      this.song = SongFactory.get({id: $stateParams.id});
    }

})();

  //
  //   Disregard the code below.  It was misguided from the start.  I tried to use it
  // as a sort of "hello world" for this file.
  //
  //    SongsShowCtrl)
  //
  //
  // function SongsShowCtrl(){
  //     var showVm = this;
  //     showVm.hello = "Hello, Ralph"
  // }
