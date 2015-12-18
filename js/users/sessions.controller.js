(function(){
  angular
  .module("station")
  .controller("SessionsController", function($auth, $state, $scope){
    this.signinForm = {};

    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
        $state.go('songShow');
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
      });
    };

    this.signup = function() {
      $auth.submitRegistration(this.signupForm)
      .then(function(resp) {
        $state.go('songShow');
      })
      .catch(function(resp) {
        console.log(resp);
      });
    };

    //signout
    $scope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      if(toState.name == 'signout'){
        $auth.signOut();
      }
    });

  });
})();
