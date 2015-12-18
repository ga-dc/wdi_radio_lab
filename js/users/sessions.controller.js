(function() {
  angular
    .module("radioLab")
    .controller("SessionsController", function($auth, $state, $scope) {
      this.signupForm = {};
      this.signinForm = {};

      this.signup = function() {
        $auth.submitRegistration(this.signupForm)
          .then(function(resp) {
            $state.go('songsIndex');
          })
          .catch(function(resp) {
            console.log("Error!");
            console.log(resp);
          });
      };

      this.signin = function() {
        $auth.submitLogin(this.signinForm)
          .then(function(resp) {
            console.log("Signin success:", resp);
            $state.go('songsIndex');
          })
          .catch(function(resp) {
            console.log("Signin failure:", resp);
          });
      };

      $scope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
          if (toState.name == 'signout') {
            $auth.signOut();
          }
        });
    });
})();
