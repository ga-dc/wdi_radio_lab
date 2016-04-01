"use strict"

(function(){
  angular
  .module("radio")
  directive("SongForm", [
    "RadioFactory",
    "$state"
    SongFormDirectiveFunction
  ]);

  function SongFormDirectiveFunction (RadioFactory, $state){
    return{
        templateUrl: "js/songs/main_index.html"
    }
  }
}
