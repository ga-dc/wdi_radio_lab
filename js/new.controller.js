"use strict";
(function(){
  angular
  .module("songs")
  .controller("NewController", ["SongFactory", "$state", NewController])

  function NewController(SongFactory, $state){
    var vm = this
    vm.song = new SongFactory();
    vm.create = function(){
      vm.song.$save().then(function(res){
        console.log("then called");
        console.log(res);
        $state.go("songs")
      })
    }
  }
})();
