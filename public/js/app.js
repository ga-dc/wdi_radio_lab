"use strict";



angular
    .module("radiosc", [
        "ui.router",
        "firebase"
    ])
    .config([
        "$stateProvider",
        RouterFunction
    ])

.controller("SongIndexController", [
    "$firebaseArray",
    SongIndexControllerFunction
])


function RouterFunction($stateProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "js/ng-views/home.html",
            controller: "HomeController",
            controllerAs: "vm"
        })
        .state("songIndex", {
            url: "/songs",
            templateUrl: "js/ng-views/index.html",
            controller: "SongIndexController",
            controllerAs: "vm"
        })
}

function HomeControllerFunction() {

}

function SongIndexControllerFunction($firebaseArray) {
    console.log('this is happening')
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref)
}