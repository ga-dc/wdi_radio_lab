let songsData = [
  { title: 'Get Lucky'},
  { title: 'Beyond'},
  { title: 'Instant Crush'}
]

angular
.module("wdi-radio", ["ui.router"])
.config(["$stateProvider", RouterFunction])

.controller("SongsController", [
    SongsControllerFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("home", {
      url: "/",
      controller: "SongsController",
      controllerAs: "vm",
      templateUrl: "js/songs-views/home.html"
    })

    .state("songsIndex", {
      url: "/songs",
      controller: "SongsController",
      controllerAs: "vm",
      templateUrl: "js/songs-views/index.html"
    });
  }

  function SongsControllerFunction () {
    this.songs = songsData
  }
