angular
  .module("wdiRadioApp", [
    "firebase"
  ])
  .controller("WdiRadioController", [
    "$firebaseArray",
    WdiRadioControllerFunction
  ])

function WdiRadioControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
}
