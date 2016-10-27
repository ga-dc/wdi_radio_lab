angular
  .module("radioApp", [
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
  .controller("RadioShowController", [
    "$stateParams",
    "$firebaseObject",
    RadioShowControllerFunction
  ])

  function RadioShowControllerFunction($stateParams, $firebaseObject){
      let ref = firebase.database().ref("songs/" + $stateParams.id);

$firebaseObject(ref).$loaded().then(song => this.song = song)
}

function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "RadioIndexController",
    controllerAs:"vm"
  })
  .state("songShow", {
    url: "/songs/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "RadioShowController",
    controllerAs:"vm"
  })
}

function RadioIndexControllerFunction($firebaseArray){
  console.log("works")
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);

    this.create = function () {
      this.songs.$add(this.newSong).then( () => this.newSong = {} )
    }

    this.delete = function(song){
      this.songs.$remove(song)
    }
  }
