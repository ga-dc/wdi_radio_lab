  angular
    .module("wdiRadio", ["firebase", "ui.router"])
    .config(["$stateProvider", RouterFunction])
    .controller("SongIndexController", ["$firebaseArray", SongIndexControllerFunction])
    .controller("SongNewController", ["$state", "$firebaseArray", SongNewControllerFunction])
    .controller("SongEditController", ["$stateParams", "$firebaseObject", SongEditControllerFunction])

  function RouterFunction($stateProvider){
    $stateProvider
      .state("songsIndex", {
        url: "/songs",
        templateUrl: "js/ng-views/index.html",
        controller: "SongIndexController",
        controllerAs: "vm"
      })
      .state("songsNew", {
        url: "/songs/new",
        templateUrl: "js/ng-views/new.html",
        controller: "SongNewController",
        controllerAs: "vm"
      })
      .state("songsEdit", {
        url: "/songs/:id/edit",
        templateUrl: "js/ng-views/edit.html",
        controller: "SongEditController",
        controllerAs: "vm"
      })
  }
  function SongIndexControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("songs")
    this.songs = $firebaseArray(ref)
  }
  function SongNewControllerFunction($state, $firebaseArray){
    var ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);
    this.newSong = {}
    this.create = function(){
    // After we create a new todo, clear the "New Todo" input field.
    this.songs.$add(this.newSong).then( () => this.newSong = {} )
    }
  }
  function SongEditControllerFunction($stateParams , $firebaseObject){
    let ref = firebase.database().ref().child("songs/" + $stateParams.id);
    $firebaseObject(ref).$loaded().then(song => this.song = song)

    this.update = function(){
      console.log(this.song)
      this.song.$save();
    }
  }
