"use strict";

(function(){
  angular.module("station", [
    // injecting dependencies
    "ui.router",
    "ng-token-auth",
    "songs"
  ])
  .config([
    "$authProvider",
    AuthConfigFunction
  ])
  .config([ "$stateProvider",
  RouterFunction
]);

function AuthConfigFunction($authprovider){
  $authprovider.configure({
    apiUrl: "http://localhost:3000"
  });
}

function RouterFunction($stateProvider){
  $stateProvider
  .state("signin", {
    url: "/signin",
    templateUrl: "js/users/signin.html",
    controller: "SessionsController",
    controllerAs: "SessionsViewModel"
  })
  //sigout
  .state("signout", {
    url: "/signout",
    templateUrl: "js/users/signout.html",
    controller: "SessionsController",
    controllerAs: "SessionsViewModel"
  })
  //signup
  .state("signup", {
     url: "/signup",
     templateUrl: "js/users/signup.html",
     controller: "SessionsController",
     controllerAs: "SessionsViewModel"
   })
  // .state("songNew", {
  //   url: "/new",
  //   templateUrl: "js/station/index.html",
  //   controller: "SongIndexController",
  //   controllerAs: "SongIndexViewModel"
  // })

  .state("songShow", {
    url: "/songs",
    templateUrl: "js/station/index.html",
    // we get this controller from the index.controller.js
    controller: "SongIndexController",
    // this is used in the index.html view where we display all the songs
    controllerAs: "SongIndexViewModel"
  })
  // it is linked in index.html to individal songs that then render the show.html on clicking
  .state("idShow", {
    url: "/songs/:id",
    templateUrl: "js/station/show.html",
    controller: "SongShowController",
    // this is used in the show.html view where we display individual song
    controllerAs: "SongShowViewModel"
  });
}

}());
