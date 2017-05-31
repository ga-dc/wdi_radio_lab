angular
.module("radio", ["ui.router", "firebase"])
.config(["$stateProvider", RouterFunction])
.controller("radioHomeController", [radioHomeControllerFunction])
.controller("radioIndexController", ["$firebaseArray", radioIndexControllerFunction])
.controller("radioShowController", ["$stateParams", "$firebaseObject", radioShowControllerFunction])
.controller("radioNewController", ["$firebaseArray", radioNewControllerFunction])
.controller("radioUpdateController", ["$stateParams", "$firebaseObject", radioUpdateControllerFunction])

function RouterFunction ($stateProvider) {
  $stateProvider
  .state("radioHome", {
    url: '',
    controller: 'radioHomeController',
    controllerAs: 'vm',
    templateUrl: 'js/home.html'
  })
  .state("radioUpdate", {
    url: '/songs/:id/update',
    controller: 'radioUpdateController',
    controllerAs: 'vm',
    templateUrl: 'js/update.html'
  })
  .state("radioNew", {
    url: '/songs/new',
    controller: 'radioNewController',
    controllerAs: 'vm',
    templateUrl: 'js/new.html'
  })
  .state("radioIndex", {
    url: '/songs',
    controller: 'radioIndexController',
    controllerAs: 'vm',
    templateUrl: 'js/index.html'
  })
  .state("radioShow", {
    url: '/songs/:id',
    controller: 'radioShowController',
    controllerAs: 'vm',
    templateUrl: 'js/show.html'
  })
}

function radioHomeControllerFunction () {

}

function radioIndexControllerFunction ($firebaseArray) {
  let ref = firebase.database().ref().child("songs")
  this.data = $firebaseArray(ref);
  this.delete = function (input) {
    this.data.$remove(input)
  }
}

function radioShowControllerFunction ($stateParams, $firebaseObject) {
  let ref = firebase.database().ref().child("songs/" + $stateParams.id)
  $firebaseObject(ref).$loaded().then(song => this.song = song)
}

function radioNewControllerFunction ($firebaseArray) {
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref);
  this.create = function () {
    let nw = this.newSong
    this.songs.$add(nw)
  }
}

function radioUpdateControllerFunction ($stateParams, $firebaseObject) {
  let ref = firebase.database().ref().child("songs/" + $stateParams.id)
  $firebaseObject(ref).$loaded().then(song => this.song = song)
  this.update = function () {
    this.song.$save()
  }
}
