
(function(){
  angular
 .module("songs")
 .controller("SongIndexController", [
   "$firebaseArray",
   "$firebaseObject",
   "$state",
   SongIndexControllerFunction
 ]);

 function SongIndexControllerFunction($firebaseArray,$firbaseObjcet,$state){
   var vm = this;
   var ref = firebase.database().ref().child("songs");
   vm.songs = $firebaseArray(ref);

   vm.newSong = {}
   vm.create = function(){
     vm.songs.$add(vm.newSong);
     vm.newSong = {}
   };
  vm.update = function(song){
    vm.songs.$save(song).then(function() {
      $state.go("songIndex")
   })
  }
    vm.destroy = function (song) {
      vm.songs.$remove(song)
    }
  }
})();
