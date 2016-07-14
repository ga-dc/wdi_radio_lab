"use strict";

(function(){
 angular
   .module("radio", [
     "ui.router",
     "songs"
   ])
   .config([
     "$stateProvider",
     RouterFunction
   ])

   function RouterFunction($stateProvider){
     $stateProvider
       .state("Welcome", {
         url: "/",
         templateUrl: "js/greetings.html"
       })
       .state("songsIndex", {
         url: "/songs",
         templateUrl: "js/songs/index.html",
         controller: "SongsIndexController",
         controllerAs: "SongIndexVM"
       })
   }
}());
