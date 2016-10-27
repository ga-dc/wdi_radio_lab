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
.controller("RadioShowController",[
  "$sce",
  "$stateParams",
  "$firebaseObject",
  RadioShowControllerFunction

])

function RadioIndexControllerFunction($firebaseArray){
  let ref =  firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
}
function RadioShowControllerFunction($sce, $stateParams, $firebaseObject){
  let ref = firebase.database().ref().child("songs/" + $stateParams.id);
  $firebaseObject(ref).$loaded().then(song => {
    song.trustedUrl = $sce.trustAsResourceUrl(song.audio_url)
    this.song = song
  })

}

function RouterFunction($stateProvider){
  $stateProvider
  .state("radioIndex",{
    url:"/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "RadioIndexController",
    controllerAs: "vm"
  })
  .state("radioShow", {
    url: "/songs/:id",
    templateUrl: "js/ng-views/show.html",
    controller:"RadioShowController",
    controllerAs:"vm"

  })
}
