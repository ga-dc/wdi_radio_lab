"user strict";
(function(){
  angular
  .module("songs")
  .controller("songsIndexController",[
    "$firebaseArray",
    "$scope",
    songsIndexControllerFunction
  ])
  function songsIndexControllerFunction($firebaseArray, $scope){
    var vm = this;
    var ref = firebase.database().ref().child("songs");
    vm.songs = $firebaseArray(ref);


    $scope.songForm = false;
    $scope.showForm = function(){
      $scope.songForm = true;
    };
  }
})();
