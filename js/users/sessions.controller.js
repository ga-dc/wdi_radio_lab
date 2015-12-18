(function(){
  angular
  .module("radioLab")
  .controller("SessionsController", function($auth, $state, $scope){
    this.signinForm = {};
    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
        console.log("Signin success:", resp);
        $state.go("songIndex")
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
      });
    };
    this.signup = function(){
      $auth.submitRegistration(this.signupForm)
      .then(function(resp){
        console.log("Signup sucess:", resp)
        $state.go("songIndex")
      })
      .catch(function(resp){
        console.log("Signup failure:", resp)
      })
    }
    $scope.$on('$stateChangeSuccess',
      function(event, toState, toParams, fromState, fromParams){
        if(toState.name == 'signout'){
          $auth.signOut();
        }
      })
  });
})();
