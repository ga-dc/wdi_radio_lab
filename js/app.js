angular
  .module("WDIRadio", [
    "ui.router",
    "firebase",
    'ngSanitize'
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("WdiradioIndexController", [
    "$firebaseArray",
    "$scope",
    "$sce",
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

  function WdiradioIndexControllerFunction($firebaseArray, $scope, $sce) {
    this.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }

    let ref = firebase.database().ref().child("songs")
    this.songs = $firebaseArray(ref)

    // $scope.myHTML = "{{song.audioUrl}}"

    this.create = () => {
      this.songs.$add(this.newSong).then(() => this.newSong = {})
    }
    this.update = () => this.song.$save()

    this.delete = (song) => this.song.$remove(song)
  }
