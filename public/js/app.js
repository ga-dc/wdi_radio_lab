angular
  .module("wrongsongs", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("RadioIndexController", [
    "$firebaseArray",
    "$firebaseObject",
    "$stateParams",
    RadioIndexControllerFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
    .state("radioWelcome", {
      url: "/",
      templateUrl: "js/ng-views/welcome.html",
    })
    .state("radioIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "RadioIndexController",
      controllerAs: "vm"
    })
}

function RadioIndexControllerFunction($firebaseArray, $firebaseObject){
  console.log("whats up");
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);

  this.create = function(){
    this.songs.$add(this.newSong).then( () => this.newSong = {} )
  }

  console.log("hello")
  this.delete = function(song){
    this.songs.$remove(song)
  }

      // Then we retrieve a $firebaseObject based on ref. Once that asynchronous action is done, we save the resulting grumble to `this.grumble`.
      $firebaseObject(ref).$loaded().then(song => this.song = song)
      this.update = function(){
        this.song.$save();
      }

}
