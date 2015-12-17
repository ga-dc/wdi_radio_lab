(function(){
  angular
    .module("wdiRadio")
    .controller("SessionsController", function($auth, $scope, $state){
      this.signupForm = {};
      this.signinForm = {};

      this.signup = function() {
        $auth.submitRegistration(this.signupForm)
        .then(function(resp) {
          $state.go('songs');
        })
        .catch(function(resp) {
          console.log("Error!");
          console.log(resp);
        });
      };

      this.signin = function() {
        console.log(this.signinForm);
        $auth.submitLogin(this.signinForm)
        .then(function(resp) {
          $state.go('songs');
        })
        .catch(function(resp) {
          console.log(resp);
        });
      };

      $scope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams){
          if(toState.name == 'logout') {
            $auth.signOut();
          }
        });

    });
})();
