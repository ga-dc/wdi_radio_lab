angular.module("wdiRadio",['ui.router', "firebase"])
.controller("musicCtrlr", ["$firebaseArray",musicCtrlrFunc])
.config(["$stateProvider", Router])

angular.module("wdiRadio", ["firebase"])
.controller("showSongCtrllr", ["$stateParams", showSongCtrllrFunc
])

// SINCE I'VE connected to Firebase, I haven't been able to use my musicCtrlrFunc function. It won't recognize it anymore. My app no longer throws any errors regarding recognizing my connection to firebase

function musicCtrlrFunc($firebaseArray) {
  console.log("stuff");
  this.music = firebase.database().ref().child("songs")
}

function showSongCtrllrFunc($stateParams,$firebaseArray) {
  this.song = dataMusic[$stateParams.id]
}

function Router($stateProvider) {
  $stateProvider
  .state("welcome", {
    url: "/",
    templateUrl: "js/welcome.html"
  })
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
