"use strict";

(function(){
  angular
  .module("songs")
  .directive("formDirective",[
    "$state",
    "SongFactory",
    FormDirectiveFunction
  ]);
  function FormDirectiveFunction($state,SongFactory){
    return{
      templateUrl:"js/songs/_song_form.html",
      replace:true,
      scope:{
        song:"=",
        formType:"@"
      },
      link:function(scope){
        scope.create = function(){
          scope.song.$save()
        }
        scope.delete = function(){
          scope.song.$delete({id: scope.song.id})
        }
      }
    }
  }

})()
