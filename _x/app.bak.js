
                  // ######################################
                  // 201703081444L  EL MIERCOLES   JAY -->
                  // FROM MTG W Beauregard
                  // 201703081943L  EL MIERCOLES   JAY -->
                  // https://github.com/ga-wdi-exercises/grumblr_angular/blob/wdi14-solution/js/app.js

"use strict";


let instaData = [ { artist: "Beauregard", body: "Street without joy", photo_url: "https://s3-us-west-2.amazonaws.com/tabs.web.media/b/q/bqs8/bqs8-square-1536.jpg" }, { artist: "Beauregard", body: "Daniel, really, exupery, jpmmuseo", photo_url: "https://www.instasong.com/p/nUD8DyNnwf/?taken-by=xgironx&hl=en" }, { artist: "JimJam", body: "x", photo_url: "http://images.motorcycle-usa.com/articleimages/001-20150320_RGS_5071.jpg" }, { artist: "PBandJ", body: "zoomzooom", photo_url: "http://www.genuinescooters.com/images/scooter_pics/buddy50_turquoise.jpg" }, ]

angular
  .module("radio", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("songFactory", [
    "$resource",
    songFactoryFunction
  ])
  .controller("songIndexController", [
    "songFactory",
    songIndexControllerFunction
  ])
  .controller("songNewController", [
    "songFactory",
    "$state",
    songNewControllerFunction
  ])
  .controller("songShowController", [
    "songFactory",
    "$stateParams",
    songShowControllerFunction
  ])
  .controller("songEditController", [
    "songFactory",
    "$stateParams",
    "$state",
    songEditControllerFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex", {
    url: "/",
    templateUrl: "js/ng-views/index.html",
    controller: "songIndexController",
    controllerAs: "vm"
  })
  .state("songsIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/new.html",
    controller: "songNewController",
    controllerAs: "vm"
  })
  .state("songShow", {
    url: "/songs/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "songShowController",
    controllerAs: "vm"
  })
  .state("songEdit", {
    url: "/songs/:id/edit",
    templateUrl: "js/ng-views/edit.html",
    controller: "songEditController",
    controllerAs: "vm"
  })
}
function songFactoryFunction( $resource ) {
  return $resource("http://localhost:3000/songs/:id", {}, {
    update: { method: "PUT" }
  })
}

function songIndexControllerFunction( songFactory ) {
  this.songs = songFactory.query()
}

function songNewControllerFunction( songFactory, $state ) {
  this.song = new songFactory()
  this.create = function() {
    this.song.$save(function(song) {
      $state.go("songShow", {id: song.id})
    })
  }
}

function songShowControllerFunction( songFactory, $stateParams ) {
  this.song = songFactory.get({id: $stateParams.id})
  console.log(this.song)
}

function songEditControllerFunction( songFactory, $stateParams, $state ) {
  this.song = songFactory.get({id: $stateParams.id})
  this.update = function() {
    this.song.$update({id: $stateParams.id}, function(song) {
      $state.go("songShow", {id: song.id})
    })
  }
  this.destroy = function(){
    this.song.$delete({id: $stateParams.id}, function() {
      $state.go("songIndex")
    })
  }
}
