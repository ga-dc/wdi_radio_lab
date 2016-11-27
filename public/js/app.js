angular
  .module("radio", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("RadioIndexController", [
    "$firebaseArray",
    RadioIndexControllerFunction
  ])

  function RouterFunction($stateProvider){
        $stateProvider
        .state("radioIndex", {
          url: "/songs",
          templateUrl: "js/ng-views/index.html",
          controller: "RadioIndexController",
          controllerAs: "vm"
        })
      }

      function RadioIndexControllerFunction($firebaseArray){
         let ref = firebase.database().ref().child("songs");
         this.songs = $firebaseArray(ref);
       }
}
