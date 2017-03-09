angular
  .module("wdiRadio", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("SongsIndexController", [
    "$firebaseArray",
    SongsIndexControllerFunction
  ])
  .controller("SongsNewController", [
    "$firebaseArray",
    SongsNewControllerFunction
  ])
  .controller("SongsEditController", [
    "$stateParams",
    "$firebaseObject",
    SongsEditControllerFunction
  ])
  .controller("SongsShowController", [
    "$stateParams",
    "$firebaseObject",
    SongsShowControllerFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
      .state("Intro", {
        url: "",
        templateUrl: "js/ng-views/intro.html"
      })
      .state("Index", {
        url: "/songs",
        templateUrl: "js/ng-views/index.html",
        controller: "SongsIndexController",
        controllerAs: "vm"
      })
      .state("New", {
        url: "/songs/new",
        templateUrl: "js/ng-views/new.html",
        controller: "SongsNewController",
        controllerAs: "vm"
      })
      .state("songEdit", {
        url: "/songs/:id/edit",
        templateUrl: "js/ng-views/edit.html",
        controller: "SongsEditController",
        controllerAs: "vm"
      })
      .state("songShow", {
        url: "/songs/:id",
        templateUrl: "js/ng-views/show.html",
        controller: "SongsShowController",
        controllerAs: "vm"
      })


  }

  function SongsIndexControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);
  }

  function SongsNewControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);
    this.create = function(){
      this.songs.$add(this.newSong).then( () => this.newSong = {})
    }
  }

  function SongsEditControllerFunction($stateParams, $firebaseObject){
    let ref = firebase.database().ref().child("songs/" + $stateParams.id);
    $firebaseObject(ref).$loaded().then(song => this.song = song)

    this.update = function(){
      this.song.$save();
    }
  }

  function SongsShowControllerFunction($stateParams, $firebaseObject){
    let ref = firebase.database().ref().child("songs/" + $stateParams.id);
    $firebaseObject(ref).$loaded().then(song => this.song = song)

    this.delete = function(){
      this.song.$remove()
    }

    this.update = function(){
      this.song.$save();
    }
  }
