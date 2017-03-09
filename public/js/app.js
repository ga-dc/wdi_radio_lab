angular
  .module("WDIRadio", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller([
    "$firebaseArray",
    WdiradioIndexControllerFunction
  ])
  .controller([
    "$stateParams",
    "$firebaseObject",
    WdiradionShowControllerFunction
  ])

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("WdiradioIndex", {
        url: "/songs",
        templateUrl: "js/ng-views/index.html",
        controller: "WdiradionIndexController",
        controllerAs: "vm"
      })
      .state("WdiradionShow" {
        url: "/songs/:id",
        templateUrl: "js/ng-views/show.html",
        controller: "WdiradionShowController",
        controllerAs: "vm"
      })
  }

  function WdiradioIndexControllerFunction($firebaseArray) {
    let ref = firebase.database().ref().child("songs")
    this.songs = $firebaseArray(ref)

    this.create = () => {
      this.songs.$add(this.newSong).then(() => this.newSong = {})
    }
    this.delete = (song) => this.song.$remove(song)
  }

  function WdiradionShowControllerFunction($stateParams, $firebaseObject) {
    let ref = firebase.database().ref().child(`songs/${$stateParams.id}`)

    $firebaseObject(ref).$loaded().then(song => this.song = song)

    this.update = () => this.song.$save()
  }
