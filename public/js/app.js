angular
  .module("radio", ["firebase"])
  .controller("SongController", [
    "$firebaseArray",
    SongControllerFunction
  ])

function SongControllerFunction($firebaseArray) {
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)
}
