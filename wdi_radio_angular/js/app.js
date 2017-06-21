// let songsData = [
//   { title: 'Get Lucky', artist: 'Daft Punk' },
//   { title: 'Beyond', artist: 'Daft Punk' },
//   { title: 'Instant Crush', artist: 'Daft Punk' }
// ]

angular
.module("wdi-radio", [
  "ui.router",
  "ngResource"
])
.config(["$stateProvider", RouterFunction])

.factory( "SongsFactory", [
  "$resource",
  SongsFactoryFunction
])


.controller("SongsIndexController", [
    "SongsFactory",
    SongsIndexControllerFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("home", {
      url: "/",
      controller: "SongsIndexController",
      controllerAs: "vm",
      templateUrl: "js/songs-views/home.html"
    })

    .state("songsIndex", {
      url: "/songs",
      controller: "SongsIndexController",
      controllerAs: "vm",
      templateUrl: "js/songs-views/index.html"
    });
  }

  function SongsIndexControllerFunction (SongsFactory) {
    this.songs = SongsFactory.query();
  }


  function SongsFactoryFunction($resource) {
    return $resource ("http://localhost:3000/songs/:id.json");
  }
