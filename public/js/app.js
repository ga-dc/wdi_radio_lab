//app.js
angular.module("wdiradio", [
  "ui.router",
  "firebase"
])
  .config([
    "$stateProvider",
    RouterFunction
  ])
.controller("SongIndexController", [SongIndexControllerFunction])


function SongIndexControllerFunction(){

}

function SongControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref)


this.create = function(){
  this.songs.$add(this.newSong).then(() => this.newSong ={} )
}

this.delete = function(song){
  this.songs.$remove(song)
  }

this.edit = function(song) {
  this.songs.$save(song)
  }
}

function RouterFunction($stateProvider) {
  $stateProvider
  .state("home", {
    url: "/songs",
    templateUrl: "ng-views/home.html",
    controller: "SongIndexController",
    controllerAs: 'vm'
  })
}
  .state('songsIndex', {
    url: '/songs',
    templateUrl: 'ng-views/show.html',
    controller: "SongIndexController",
    controllerAs: 'vm'
  })
}
