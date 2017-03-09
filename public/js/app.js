angular
  .module("radiolab", ["ui.router", "firebase"])
  .config(["$stateProvider", RouterFunction])
  .controller("radioIndexController", ["$firebaseArray", radioIndexControllerFunction])
  .controller("radioShowController", ["$stateParams","$firebaseObject", radioShowControllerFunction])

function RouterFunction ($stateProvider){
    $stateProvider
    .state("radioIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "radioIndexController",
      controllerAs: "vm"
    })
    .state("radioShow", {
      url: "/songs/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "radioShowController",
      controllerAs: "vm"
    })
  }

function radioIndexControllerFunction ($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
  this.newSong = {}

  this.create = function (){
    this.songs.$add(this.newSong).then( () => this.newSong = {})
  }
  this.delete = function(song){
    this.songs.$remove(song)
  }
}

function radioShowControllerFunction ($stateParams, $firebaseObject) {

  let ref = firebase.database().ref().child("songs/"+ $stateParams.id)

  $firebaseObject(ref).$loaded().then(song => this.song = song)


}
