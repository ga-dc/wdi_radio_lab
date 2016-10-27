angular
.module("wdiradio", [
  "ui.router",
  "firebase"

])
.config([
  "$stateProvider",
  RouterFunction
])
.controller("RadioIndexController",[
  "$firebaseArray",
  RadioIndexControllerFunction
])

function RadioIndexControllerFunction($firebaseArray){
  let ref =  firebase.database().ref.child("songs");
  this.songs = $firebaseArray(ref);
})

function RouterFunction($stateProvider{
  $stateProvider
  .state("radioIndex",{
    url:"/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "RadioIndexController",
    controllerAs: "vm"
  })
})
