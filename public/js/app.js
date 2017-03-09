function(){
  angular
    .module("wdiRadio", [
      "ui.router",
      "firebase",
      "songs"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])

    .controller("SongsIndexController", [
      "$firebaseArray",
      SongsControllerFunction
    ])

    function RouterFunction($stateProvider){
      $stateProvider
        .state("Welcome", {
          url: "",
          templateUrl: "js/welcome.html"
        })
        .state("songs", {
          url: "/songs",
          templateUrl: "js/songs/index.html",
          controller: "SongsIndexController",
          controllerAs: "SongsIndexViewModel"
        })
    }
}();
