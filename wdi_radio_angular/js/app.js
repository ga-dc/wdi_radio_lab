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
    "$state",
    SongsIndexControllerFunction
  ])

.controller("SongsShowController", [
      "SongsFactory",
      "$stateParams",
      SongsShowControllerFunction
  ])

.controller("SongsEditController", [
        "SongsFactory",
        "$stateParams",
        "$state",
        SongsEditControllerFunction
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
    })


    .state("songShow", {
      url: "/songs/:id",
      controller: "SongsShowController",
      controllerAs: "vm",
      templateUrl: "js/songs-views/show.html"
    })

    .state("songEdit", {
      url: "/songs/:id/edit",
      controller: "SongsEditController",
      controllerAs: "vm",
      templateUrl: "js/songs-views/edit.html"
    });
  }

  function SongsIndexControllerFunction (SongsFactory, $state) {
    this.songs = SongsFactory.query();

    // for new song
    this.song = new SongsFactory();
    this.create = function() {
      this.song.$save().then( function(){
        $state.go("songsIndex")
      })
    }
  }

  function SongsShowControllerFunction (SongsFactory, $stateParams) {
    this.song = SongsFactory.get({id: $stateParams.id});
  }

  function SongsEditControllerFunction (SongsFactory, $stateParams, $state) {
    this.song = SongsFactory.get({id: $stateParams.id});
    this.update = function() {
      this.song.$update({id: $stateParams.id}).then( function(){
        $state.go("songsIndex")
      })
    }
    this.destroy = function() {
      this.song.$delete({id: $stateParams.id}).then( function(){
        $state.go("songsIndex")
      })
    }
  }

  function SongsFactoryFunction($resource) {
    return $resource ("http://localhost:3000/songs/:id.json", {}, {
        update: {method: "PUT"}

    });
  }
