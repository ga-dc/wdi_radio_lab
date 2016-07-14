"user strict";
(function(){
  angular
  .module("songs")
  .controller("songsIndexController",[
    "$firebaseArray",
    "$scope",
    "$state",
    songsIndexControllerFunction
  ])
  function songsIndexControllerFunction($firebaseArray, $scope, $state){
    var vm = this;
    var ref = firebase.database().ref().child("songs");
    vm.songs = $firebaseArray(ref);

    vm.create = function(){
      vm.songs.$add(vm.newSong).then(function(){
        $state.reload();
      })
    };
    vm.update = function(song){
      vm.songs.$save(song).then(function(){
        $state.reload();
      });
    };
  }
})();
