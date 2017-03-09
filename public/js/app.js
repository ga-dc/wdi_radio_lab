var app = angular.module("wdiRadio", ["firebase", "ui.router"])
app.controller("SongsIndexController", ["$firebaseArray", "$scope", SongsIndexControllerFunction])
app.config(["$stateProvider", RouterFunction])

function RouterFunction($stateProvider){
  $stateProvider
  .state("welcome", {
    url: "/",
    templateUrl: "ng-views/index.html",
    controller: "SongsIndexController"
  })
  .state("songsIndex", {
    url: "/songs",
    templateUrl: "ng-views/songs.html",
    controller: "SongsIndexController",
    controllerAs: "vm"
  })
}

function SongsIndexControllerFunction($firebaseArray, $scope){

  let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);
    this.newSong = {}

  $scope.IsVisible = true;
  $scope.ShowHide = function (song) {
                    //If DIV is visible it will be hidden and vice versa.
          $scope.IsVisible = $scope.IsVisible ? false : true;
        }
  this.update = function (song){
    console.log("hooray it updated!");
    this.songs.$save(song)
  }

  this.create = function(){
      // After we create a new todo, clear the "New Todo" input field.
      this.songs.$add(this.newSong).then( () => this.newSong = {} )
    }

  this.destroy = function(song){
    this.songs.$remove(song);
  }
}
