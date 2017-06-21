// Initialize a Router
//
// Configure your app's routing in the app.js.
// Add a state for the routes / and /songs.
// Create templates for these routes.
// Define a Controller
//
// Create a controller file and define a controller to handle songs.
// Access the data from firebase and save it as a property on the controller
// Build Views
//
// Use data attached to your view model to display a list of all songs


angular
  .module("RadioApp", ["ui.router"
"firebase"
  ])

  .controller("RadioAppController", [
  "$firebaseArray",
  RadioAppControllerFunction
  ])
  .config(["$stateProvider",
  RouterFunction

  ])

  function RouterFunction($stateProvider){
  $stateProvider
  .state("songsIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "songsIndexController",
    controllerAs: "vm"
  })
  .state("songsNew", {
    url: "/songs/new",
    templateUrl: "js/ng-views/new.html",
    controller: "songsNewController",
    controllerAs: "vm"
  })
  .state("songsShow", {
    url: "/songs/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "songsShowController",
    controllerAs: "vm"
  });

  function SongIndexControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);
    this.newSong = {}
    //
    this.create = function(){
      this.songs.$add(this.newSong).then( () => this.newSong = {} )
    }
    this.update = function (song) {
      this.songs.$save(song)
    }
    this.delete = function(song){
      this.songs.$remove(song);
    }
  }
