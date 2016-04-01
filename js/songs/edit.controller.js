"use strict";

(function(){
  angular
    .module( "songs" )
    .controller( "SongsEditController", [
      "SongsFactory",
      "$stateParams",
      "$state",
      SongsEditControllerFunction
    ]);

  function SongsEditControllerFunction( SongsFactory, $stateParams, $state ){
    this.song = SongsFactory.get({id: $stateParams.id});
    this.update = function(){
      this.song.$update({id: $stateParams.id})
      $state.go("songShow", {id: $stateParams.id, reload:true})
    }
    this.destroy = function(){
      this.song.$delete({id: $stateParams.id}, function(){
        $state.go("songIndex")
      })
    }
  }
}());
