angular
.module("radio", ["firebase", "ui.router"])
.config(["$stateProvider", Router])
.controller("indexController", [
  "$firebaseArray",
  indexControllerFunction
])
.controller("showController", [
  "$stateParams",
  "$firebaseObject",
  showControllerFunction
])

function Router($stateProvider){
  $stateProvider
  .state("home", {
    url: '/',
    templateUrl: 'js/home.html',
    controller: 'indexController',
    controllerAs: 'vm'
  })
  .state("show", {
    url: '/songs/:id',
    templateUrl: 'js/show.html',
    controller: 'showController',
    controllerAs: 'vm'
  })
}

function indexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)

  this.create = function(){
    this.songs.$add(this.newSong).then( () => this.newSong = {})
  }

  this.delete = function(song){
    this.songs.$remove(song)
  }
}

function showControllerFunction($stateParams, $firebaseObject){
  let ref = firebase.database().ref().child("songs/" + $stateParams.id)
  $firebaseObject(ref).$loaded().then(song => this.song = song)

  this.update = function(){
    this.song.$save()
  }
}
