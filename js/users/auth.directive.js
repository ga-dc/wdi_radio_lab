"use strict";

(function(){
  angular
    .module("wdiRadio")
    .directive("authNav", function($auth) {
      return {
        templateUrl: "js/users/_auth.html",
        replace: true,
        link: function(scope) {
          // update scope/view on successful signin
          scope.$on('auth:login-success', function(ev, user) {
            scope.currentUser = user;
          });
          scope.$on('auth:logout-success', function(ev, user) {
            scope.currentUser = false;
          });

          // set initial state, for currentUser, when directive is loaded
          $auth.validateUser()
            .then(function(user){
              scope.currentUser = user;
            })
            .catch(function(err){
              scope.currentUser = undefined;
            });
        }
      };
    });
})();
