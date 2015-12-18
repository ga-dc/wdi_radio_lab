"use strict";

(function(){
  angular
  .module("wdiRadio")
  .directive("authNav", function($auth) {
    return {
      templateUrl: "js/nav/_auth.html",
      replace: true,
      restrict: 'E',
      link: function(scope) {
        scope.$on('auth:login-success', function(ev, user) {
          scope.currentUser = user;
        });

        $auth.validateUser()
          .then(function(user) {
            scope.currentUser = user;
          })
          .catch(function(err) {
            scope.currentUser =
            undefined;
          });
      }
    };
  });
}());
