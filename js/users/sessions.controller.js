"use strict";

(function(){
  angular
  .module("wdiRadio")
  .controller("SessionsController", function($auth){
    this.signinForm = {};
    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
        console.log("Signin success:", resp);
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
      });
    };
  });
})();
