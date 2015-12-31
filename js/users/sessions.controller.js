(function(){
  angular
  .module("wdiRadio")
  .controller("SessionsController", function($auth, $scope, $state){
    this.signinForm = {};
    this.signupForm = {};

    this.signin = function(){
      $auth.submitLogin(this.signinForm)
      .then(function(resp){
        console.log(this.signinForm);
        console.log("Signin Sucess");
        $state.go("songsIndex");
      })
      .catch(function(resp){
        console.log("Failed");
      });
    };

    this.signup = function(){
      $auth.submitRegistration(this.signupForm)
      .then(function(resp){
        $state.go("songsIndex");
      })
      .catch(function(resp){
        console.log("FAILED");
      });
    };

    $scope.$on("$stateChangeSuccess",
    function(event, toState, toParams, fromState, fromParams){
      if(toState.name == "logout"){
        $auth.signOut();
      }
    });

  });

})();
