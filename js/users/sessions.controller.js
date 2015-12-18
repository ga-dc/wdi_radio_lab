
// js/users/sessions.controller.js
(function(){
  angular
  .module("wdiRadio")
  .controller("SessionsController", function($auth){
    this.signinForm = {};
    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
        $state.go('songs');
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
      });
    };
    this.signup = function() {
        $auth.submitRegistration(this.signupForm)
        .then(function(resp) {
          $state.go('songs');
        })
        .catch(function(resp) {
          console.log(resp);
        });
      };

    $scope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      if(toState.name == 'signout') {
        $auth.signOut();
      }
    });
  });
})();
