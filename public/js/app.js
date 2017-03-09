angular
.module("wdi_radio", ["ui.router", "firebase"])
.config(["$stateProvider", RouterFunction])
.controller("SongIndexController", ["$firebaseArray", "$firebaseObject", SongIndexControllerFunction])
// .controller("SongNewController", ["$firebaseArray", SongNewControllerFunction])

function RouterFunction($stateProvider){
  $stateProvider
  .state("songIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "SongIndexController",
    controllerAs: "vm"
  // }).state("songNew", {
  //   url: "/songs/new",
  //   templateUrl: "js/ng-views/new.html",
  //   controller: "SongNewController",
  //   controllerAs: "vm"
  // })
});
}

function SongIndexControllerFunction($firebaseArray, $firebaseObject){
  var vm = this;
let ref = firebase.database().ref().child("songs");
  $firebaseArray(ref).$loaded().then(function(songs){
    vm.songs = songs;
  });
  // this.songs = $firebaseArray(ref);

  vm.create = function() {
    vm.songs.$add(vm.newSong).then(()=> vm.newSong = {})

  }
  $firebaseObject(ref).$loaded().then(song => vm.song = song);
  vm.update = function(song){
    vm.songs.$save(song);
  }

  vm.delete = function(song){
    vm.songs.$remove(song);
  }
}
//
// function SongNewControllerFunction($firebaseArray){
//   this.create = function() {
//     this.songs.$add(this.newSong).then(()=> this.newSong = {})
//
//   }
// }
