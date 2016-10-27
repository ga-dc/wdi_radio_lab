angular
  .module("wdi-radio", [
    "ui.router",
    "firebase",
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("SongIndexController"[
    "$firebaseArray",
    SongIndexControllerFunction
  ])


function RouterFunction( $stateProvider ) {
  $stateProvider

}

function SongIndexControllerFunction($firebaseArray){

}
