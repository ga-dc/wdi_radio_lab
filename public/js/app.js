angular
  .module("WdiRadio", [
    "firebase",
  ])
  .controller("WdiController", [
    "$firebaseArray",
    WdiControllerFunction
  ])

function WdiControllerFunction ($firebaseArray) {
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)

}
