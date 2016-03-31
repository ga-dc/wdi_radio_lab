"use strict";

(function(){
  angular
  .module("wdiRadio")
  .directive("editForm", function(){
    return{
      templateUrl: 'js/wdi_radio/_song_edit.html',
      replace: true,
      restrict: 'C',
      scope: {
        song: "=",
        formType: "@"
      },
      link: function(scope){
        scope.create = function() {
          scope.song.$save()
        }
        scope.update = function() {
          scope.song.$update({id: scope.song.id})
        }
      }
    }
  });
})();
