angular.module("wdiRadio",['ui.router', "firebase","songs"])
.controller("musicCtrlr", ["$firebaseArray",musicCtrlrFunc])
.config(["$stateProvider", Router])

angular.module("wdiRadio", ["firebase"])
.controller("showSongCtrllr", ["$firebaseArray","$stateParams", showSongCtrllrFunc
])

function musicCtrlrFunc($firebaseArray) {
  console.log("stuff");
  this.music = firebase.database().ref().child("songs")
}

function showSongCtrllrFunc($stateParams,$firebaseArray) {
  this.song = dataMusic[$stateParams.id]
}

function Router($stateProvider) {
  $stateProvider
  .state("songs", {
    url: "/songs",
    controller: "musicCtrlr",
    controllerAs: "ctrlr",
    templateUrl: "js/ng-views/index.html"
  })
  .state("showSongs", {
    url: "/songs/:id",
    controller: "showSongCtrllr",
    controllerAs: "ctrlr",
    templateUrl: "js/ng-views/show.html"
  })
}
