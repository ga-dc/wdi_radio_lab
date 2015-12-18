"use strict";

(function(){
  angular
  .module("wdiRadio")
  .controller("SessionsController", function($auth,$state,$scope){
    this.signinForm = {};
    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
         $state.go('songIndex');
        // console.log("Signin success:", resp);
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
