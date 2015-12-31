(function(){
  angular
    .module("wdiRadio")
    .directive("authNav", function($auth) {
      return {
        templateUrl: "js/nav/_auth.html",
        replace: true,
        link: function(scope) {
          scope.$on('auth:login-success', function(ev, user) {
            scope.currentUser = user;
          });
          scope.$on('auth:registration-email-success', function(ev, user) {
            scope.currentUser = user;
          });
          scope.$on('auth:logout-success', function(ev, user) {
            scope.currentUser = false;
          });

          $auth.validateUser()
            .then(function(user){
              scope.currentUser = user;
            })
            .catch(function(err){
              scope.currentUser = undefined;
            })
        }
      };
    });
})();
