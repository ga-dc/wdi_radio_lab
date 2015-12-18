(function (){
  angular
  .module("wdi_radio", [
    "ui.router",
    "ng-token-auth",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .config([
    "$authProvider",
    AuthConfigFunction
  ]);

  function AuthConfigFunction($authprovider) {
    $authprovider.configure({
      apiUrl: "http://localhost:3000"
    });
  }

  function RouterFunction($stateProvider, $locationProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "js/welcome.html"
    })
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
    .state("signin", {
      url: "/signin",
      templateUrl: "/js/users/signin.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("signup", {
      url: "/signup",
      templateUrl: "js/users/signup.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("signout", {
      url: "/signout",
      templateUrl: "js/users/signout.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    });
  }
})();
