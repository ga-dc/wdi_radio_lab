"use strict";

(function(){
  angular
    .module("wdiRadio", [
      "ui.router",
      "songs",
      "ng-token-auth"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])
    .config([
      "$authProvider",
       AuthFunction
    ])

    function AuthFunction($authprovider) {
      $authprovider.configure({
        apiUrl: "http://localhost:3000"
      });
    }

    function RouterFunction($stateProvider){
      $stateProvider
        .state("home", {
          url: "",
          template: "Welcome to the World's Best Song App"
        })
        .state("songs", {
          url: "/songs",
          templateUrl: "js/songs/index.html",
          controller: "SongsIndexController",
          controllerAs: "SongsIndexViewModel",
          resolve: {
            auth: function($auth) {
              return $auth.validateUser();
            }
          }
        })
        .state("signup", {
          url: "/signup",
          templateUrl: "js/users/new.html",
          controller: "SessionsController",
          controllerAs: "SessionsViewModel"
        })
        .state("signin", {
          url: "/signin",
          templateUrl: "js/users/signin.html",
          controller: "SessionsController",
          controllerAs: "SessionsViewModel"
        })
        .state("logout", {
          url: "/logout",
          templateUrl: "js/users/logout.html",
          controller: "SessionsController",
          controllerAs: "SessionsViewModel"
        });
    } // closes Router Function
}());
