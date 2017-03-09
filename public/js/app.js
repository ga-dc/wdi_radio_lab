angular
  .module("radiolab", ["firebase"])
  .controller("radiocontroller", ["$firebaseArray", radioControllerFunction])

  function radioControllerFunction ($firebaseArray){
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);
  }
