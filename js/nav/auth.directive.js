// js/nav/auth.directive.js
(function(){
  angular
    .module("wdi_radio")
    .directive("authNav", function($auth) {
      return {
        templateUrl: "js/nav/_auth.html",
        replace: true,
        restrict: 'E',
        link: function(scope) {
          scope.$on('auth:logout-success', function(ev, user) {
            scope.currentUser = false;
          });
          // update scope/view on successful signin
          scope.$on('auth:login-success', function(ev, user) {
            scope.currentUser = user;
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
