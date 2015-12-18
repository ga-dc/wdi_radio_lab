"use strict";

(function(){
  angular
  .module("wdiRadio")
  .controller("SessionsController", function($auth, $state, $scope){
    this.signinForm = {};
    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
        $state.go('grumbleIndex');
      })
      .catch(function(resp) {
        console.log("Signin Failure:", resp);
      });
    };
  });
}());
