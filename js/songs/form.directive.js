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
          scope.song.$save(scope.song,function(song){
            $state.go("songIndex",{},{reload:true})
          })
        }
        scope.delete = function(){
          scope.song.$delete({id: scope.song.id},function(song){
            $state.go("songIndex",{},{reload:true})
          })
        }
        scope.update = function(){
          scope.song.$update({id: scope.song.id})
        }
        scope.toggleForm = function(){
          scope.formVisible = (scope.formVisible)?false:true;
        }
        scope.formVisible = (scope.formType=='edit')?true:false;
      }
    }
  }

})()
