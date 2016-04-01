"use strict";

(function(){
  angular
  .module("wdiRadio")
  .directive("editForm", [
    "$window",
    EditDirectiveFunction
  ])

  function EditDirectiveFunction($window){
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
          $window.location.reload();
        }
        scope.update = function() {
          scope.song.$update({id: scope.song.id})
          $window.location.reload();
        }
        scope.delete = function() {
          scope.song.$delete({id: scope.song.id})
          $window.location.reload();
        }
      }
    }
  };
})();
