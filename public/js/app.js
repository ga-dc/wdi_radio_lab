angular.module("wdiradio", [
  "ui.router",
  "firebase"
])
.config([
  "$stateProvider",
  Router
])
.controller("songIndexController", [
  SongIndexControllerFunction
])

function SongIndexControllerFunction(){
  console.log("index controller working");
}

function Router($stateProvider){
  $stateProvider
  .state("songIndex", {
    url: "/songs",
    templateUrl: "public/js/ng-views/index.html",
    controller: "SongIndexController",
    controllerAs: "vm"
  })
  .state("songNew", {
    url: "/songs/new",
    templateUrl: "public/js/ng-views/new.html",
    controller: "SongIndexController",
    controllerAs: "vm"
  })
}
