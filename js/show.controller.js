"use strict";

(function(){
  angular
  .module("songs")
  .controller("ShowController", ["SongFactory", "$stateParams", ShowControllerFunc])

  function ShowControllerFunc(SongFactory, $stateParams){
    this.song = SongFactory.get({id:$stateParams.id})
  }
})();
