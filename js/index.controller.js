"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongsIndexCtrl", [    // Names this controller as SongsIndexCtrl...
      "SongFactory",                // and gets the SongFactory function, and calls...
      ControllerFunction          // .. this SongsIndexCtrlFunc function.
    ])

    function ControllerFunction(SongFactory) {
        this.songs = SongFactory.query();

      // var indexVm = this;             this attempt at 'hello world' didn't work.
      // indexVm.hello = "Hello Dave"
    }

})();
