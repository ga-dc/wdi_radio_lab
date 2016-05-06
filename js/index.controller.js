"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongsIndexCtrl",[    // Names this controller as SongsIndexCtrl...
      "SongFactory",                // and gets the SongFactory function, and calls...
      SongsIndexCtrlFunc          // .. this SongsIndexCtrlFunc function.
    ])
    function SongsIndexCtrlFunc() {
      var indexVm = this;
      indexVm.hello = "Hello Dave"
    }

})();
