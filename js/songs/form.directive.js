"use strict";

(function() {
  angular.module("songs")
    .directive("songForm", function($state, SongFactory) {
      return {
        templateUrl: "js/songs/_song_form.html",
        transclude: true,
        scope: {
          song: "=",
          formType: "@"
        },
        link: function(scope) {
          scope.edit = function() {
            scope.song.$update({id: scope.song.id}).then(function() {
              $state.go("songsIndex", {}, {reload: true});
            });
          }
          scope.delete = function() {
            scope.song.$delete({id: scope.song.id}).then(function() {
              $state.go("songsIndex", {}, {reload: true});
            });
          }
          scope.create = function() {
            scope.song.$save().then(function() {
              $state.go("songsIndex", {}, {reload: true});
            });
          }
        }
      }
    });
})();
