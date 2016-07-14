"user strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController",["$firebaseArray","$state",
  ControllerFunction
  ])

  function ControllerFunction($firebaseArray,$state){
    console.log('here')
    var vm = this;
    var ref = firebase.database().ref().child("songs");
    vm.songs = $firebaseArray(ref);
    //create
    vm.create = function(){
        console.log(vm.songs);
      vm.songs.$add(vm.newSong).then(function(){
        vm.newSong = {};
      })
    }
    //update
    vm.update = function(song){
      vm.songs.$save(song).then(function(){
        $state.reload();
      })
    }
    //destroy

  }
}());
