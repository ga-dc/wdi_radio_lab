(function(){
  angular
  .module("radioLab")
  .controller("SessionsController", function($auth, $state, $scope){
    $scope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
              if(toState.name == 'signout') {
                $auth.signOut();
              }
            });
    this.signinForm = {};
    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
        console.log("Signin success:", resp);
        $state.go('songsIndex');
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
      });
    };
  });
})();
