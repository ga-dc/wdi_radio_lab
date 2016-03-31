"use strict";

(function(){
  angular
  .module("wdiRadio")
  .controller("SessionsController", function($auth,$state,$scope){
    this.signinForm = {};
    this.newUser = {};
    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
         $state.go('songIndex');
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
      });
    };
    this.signup = function(){
      console.log(this.newUser)
      $auth.submitRegistration(this.newUser)
      .then(function(resp) {
        $state.go('songIndex');
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
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
