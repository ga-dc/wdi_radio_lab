angular
  .module("wdi-radio", [
    "ui.router",
    "firebase",
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    RouterFunction
  ])
  .controller("SongIndexController"[
    "$firebaseArray",
    SongIndexControllerFunction
  ])


function RouterFunction($stateProvider, $locationProvider) {
  $stateProvider
    // .state
}

function SongIndexControllerFunction($firebaseArray){

}
