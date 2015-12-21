(function(){

  'use strict';

  angular
  .module('wdi_radio')
  .controller('SessionsController', function($auth, $state, $scope){
    this.signinForm ={};
    this.registrationForm = {};
    this.signin = function(){
      $auth.submitLogin(this.signinForm)
      .then(function(resp){
        $state.go('songs');
      })
      .catch(function(resp){
        console.log('Signin failure: ' + resp);
      });
    };
    this.signup = function() {
      $auth.submitRegistration(this.registrationForm)
      .then(function(resp){
        $state.go('songs');
      })
      .catch(function(resp){
        console.log('Signup failure: ' + resp);
      });
    };
      $scope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams){
          if(toState.name == 'signout'){
            $auth.signOut();
          }
        });
  });
})();
