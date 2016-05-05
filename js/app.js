"use strict";

(function(){
  angular
    .module("wdi_radio", [
      "ui.router"
    ])
    .config([
      "$stateProvider",
      RouterFunc
    ])
    .controller("SongsIndexCtrl", SongsIndexCtrlFunc)

    function RouterFunc($stateProvider) {

      $stateProvider
        .state("allSongs", {
          url: "/songs",
          templateUrl: "/js/index.template.html",
          controller: "SongsIndexCtrl",
          controllerAs: "indexVm"
        })

        .state("welcome", {
          url: "/",
          templateUrl: "/js/welcome.template.html"
        })
    }


    function SongsIndexCtrlFunc() {
      var indexVm = this;
      indexVm.hello = "Hello Dave"
    }

})()
