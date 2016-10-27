angular
  .module("wdiradio", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("SongIndexController", [
    "$firebaseArray",
    SongIndexControllerFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
  .state("welcome", {
    url: "/",
    templateUrl: "js/ng-views/welcome.html"
  })
  .state("songIndex", {
    url: "/songs",
    controller: "SongIndexController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/index.html"
  })
}

function SongIndexControllerFunction($firebaseArray){

  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)

  this.create = function(){
    this.songs.$add(this.newSong).then( () => this.newSong = {} )
  }
  this.delete = function(song){
    this.songs.$remove(song)
  }

  this.edit = function() {
  }

  this.update = function(){
      this.grumble.$save()
  }

}
