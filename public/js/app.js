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
.controller("RadioNewController", [
  "$firebaseArray",
  RadioNewControllerFunction
])
// .controller("RadioEditController", [
//   "$stateParams",
//   "$firebaseObject",
//   RadioEditControllerFunction
// ])

function RadioIndexControllerFunction($firebaseArray){
  let ref =  firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
  this.delete = function(song){
    this.songs.$remove(song)
  }

}

function RadioNewControllerFunction($firebaseArray){
  let ref =  firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
  this.create = function(){
    this.songs.$add(this.newSong).then(() => this.newSong = {})
  }
}
function RadioShowControllerFunction($sce, $stateParams, $firebaseObject){
  let ref = firebase.database().ref().child("songs/" + $stateParams.id);
  $firebaseObject(ref).$loaded().then(song => {
    song.trustedUrl = $sce.trustAsResourceUrl(song.audio_url)
    this.song = song
    this.update = function(){
      this.song.$save();
    }

  })

}

// function RadioEditControllerFunction($stateParams, $firebaseObject){
//   let ref = firebase.database().ref().child("songs/" + $stateParams.id);
//   $firebaseObject(ref).$loaded().then(song => {
//     song.trustedUrl = $sce.trustAsResourceUrl(song.audio_url)
//     this.song = song
//   this.update = function(){
//     this.song.$save();
//   }
// })
function RouterFunction($stateProvider){
  $stateProvider
  .state("radioIndex",{
    url:"/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "RadioIndexController",
    controllerAs: "vm"
  })
  .state("radioNew", {
    url: "/songs/new",
    templateUrl: "js/ng-views/new.html",
    controller: "RadioNewController",
    controllerAs: "vm"
  })
  .state("radioShow", {
    url: "/songs/:id",
    templateUrl: "js/ng-views/show.html",
    controller:"RadioShowController",
    controllerAs:"vm"
  })
}
  // state("radioEdit",{
  //   url: "/songs/:id/edit",
  //   templateUrl: "js/ng-views/edit.html",
  //   controller: "RadioEditController",
  //   controllerAs: "vm"
  // })
