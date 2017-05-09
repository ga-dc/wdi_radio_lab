"use strict";

angular
.module("radioApp", ["ui.router"])
.config(["$stateProvider", RouterFunction])
.controller("SongIndexController", [
  SongIndexControllerFunction
])
.controller("SongShowController", [
  SongShowControllerFunction
])


function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex", {
    url: "/",
    controller: "SongIndexController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/index.html"
    })
  .state("songShow", {
    url: "/songs",
    controller: "SongShowController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/show.html"
    })
}

function SongIndexControllerFunction() {
  console.log("index!")
}

function  SongShowControllerFunction() {
  console.log("show")
}
