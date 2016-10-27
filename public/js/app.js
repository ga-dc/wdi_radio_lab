angular
  .module("radio", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .controller("SongIndexCtrl", [
    "$firebaseArray",
    "$firebaseObject",
    "$state",
    songController
  ])

  function songController($firebaseArray,$firebaseObject,$state){
    let ref = firebase.database().ref().child("songs")
    // $firebaseObject(ref).$loaded().then(song => this.song = song)
    this.songs = $firebaseArray(ref)
    this.newSong = {}

    this.add = function(){
      // this.addSong = false
      this.songs.$add(this.newSong).then( () => this.newSong = {})
    }
    this.update = function(song){
      // this.editSong = false
      this.songs.$save(song)
    }
    this.remove = function(song){
      this.songs.$remove(song)
    }

  }

  function Router($stateProvider){
    $stateProvider
    .state("home",{
      url: "",
      templateUrl: "js/ng-views/home.html"
    })
    .state("songIndex",{
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "SongIndexCtrl",
      controllerAs: "vm"
    })
  }
