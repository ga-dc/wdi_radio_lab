angular
  .module("wdiRadio", [
    "ui.router",
    "firebase",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("WelcomeController", [
    "$state",
    WelcomeControllerFunction
  ])
  .controller("SongIndexController", [
    "$firebaseArray",
    SongIndexControllerFunction
  ])
  .controller("SongShowController", [
    "$stateParams",
    "$firebaseObject",
    SongShowControllerFunction
  ])

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "js/songs/welcome.html"
    })
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "vm"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "SongShowController",
      controllerAs: "vm"
    });
  }

  function WelcomeControllerFunction() {

  }

  function SongIndexControllerFunction($firebaseArray) {
    let ref = firebase.database().ref().child("wdiRadio");
    this.songs = $firebaseArray(ref);

  }
  function SongShowControllerFunction($stateParams, $firebaseObject){
    let ref = firebase.database().ref().child("wdiRadio/" + $stateParams.id);
    $firebaseObject(ref).$loaded().then(song => this.song = song)
  }

  // #create
  this.create = function(){
    this.songs.$add(this.newSong).then( () => this.newSong = {} )
    console.log("clicked")
  }
  // #destroy
  this.delete = function(song){
    this.songs.$remove(song)
  }
