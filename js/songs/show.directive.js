"use strict";

(function(){
  angular
  .module("songs")
  .directive("showDirective",[
    "$state",
    "SongFactory",
    ShowDirectiveFunction
  ])

  function ShowDirectiveFunction($state,SongFactory){
    return {
      templateUrl:"js/songs/_song_show.html",
      replace: true,
      restrict:"A",
      scope:{
        song: "="
      },
      link: function(scope){

      }


    }



  }

})()
