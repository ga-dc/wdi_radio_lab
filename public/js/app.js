angular
  .module("wdi-radio", [
    "ui.router",
    "firebase",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("SongIndexController", [
    "$firebaseArray",
    SongIndexControllerFunction
  ])


function RouterFunction( $stateProvider ) {
  $stateProvider
  .state("songIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "SongIndexController",
    controllerAs: "vm"
  })

}

function SongIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)
  this.create = function(){
    // this.grumbles.$add(this.newGrumble).then( () => this.newGrumble = {})
    this.songs.$add(this.newSong).then( () => this.newSong = {} )
  }
}
