angular
  .module("WDIRadio", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("WdiradioIndexController", [
    "$firebaseArray",
    WdiradioIndexControllerFunction
  ])

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("WdiradioIndex", {
        url: "/songs",
        templateUrl: "js/ng-views/index.html",
        controller: "WdiradioIndexController",
        controllerAs: "vm"
      })
  }

  function WdiradioIndexControllerFunction($firebaseArray) {
    let ref = firebase.database().ref().child("songs")
    this.songs = $firebaseArray(ref)

    this.create = () => {
      this.songs.$add(this.newSong).then(() => this.newSong = {})
    }
    this.update = () => this.song.$save()

    this.delete = (song) => this.song.$remove(song)
  }
