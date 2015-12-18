"use strict";

(function(){
  angular
    .module( "songs" )
    .controller( "SongEditController", [
      "SongFactory",
      "$stateParams",
      "$state",
      SongEditControllerFunction
    ]);

  function SongEditControllerFunction( SongFactory, $stateParams, $state ){
    this.song = SongFactory.get({id: $stateParams.id});
    this.update = function(){
      this.song.$update({id: $stateParams.id}).then(function(){
            $state.go("songsIndex")
      })

    }
    this.destroy = function(){
      this.song.$delete({id: $stateParams.id}).then(function(){
        $state.go("songsIndex")
      });

    }
  }
}());
