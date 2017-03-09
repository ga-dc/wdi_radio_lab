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
    "$sce",
    "$state",
    songController
  ])
  .directive("hi", function(){
  return {
    template: '<h1>Hi There!</h1>'
  }})

  function songController($firebaseArray,$sce,$state){
    let ref = firebase.database().ref().child("songs")
    this.songs = $firebaseArray(ref)
    this.newSong = {}

    this.add = function(){
      this.songs.$add(this.newSong).then( () => this.newSong = {})
    }
    this.update = function(song){
      this.songs.$save(song)
    }
    this.remove = function(song){
      this.songs.$remove(song)
    }
    this.safeUrl = function(song){
      return $sce.trustAsResourceUrl(song.audio_url)
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
