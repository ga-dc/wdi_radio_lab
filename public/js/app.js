angular
  .module("radio",["ui.router","firebase"])
  .config(["$stateProvider", RouterFunction])
  .controller("homeController", [homeControllerFunction])
  .controller("songsIndexController", [
    "$firebaseArray",
     songsIndexControllerFunction
   ])


function RouterFunction($stateProvider){

    $stateProvider
      .state("home", {
        url:"/",
        controller: "homeController",
        conrtollerAs: "vm",
        templateUrl: "ng-views/welcome.html"
      })
      .state("songsIndex", {
        url:"/songs",
        controller: "songsIndexController",
        conrtollerAs: "vm",
        templateUrl: "ng-views/index.html"
      });
  }

function homeControllerFunction(){
  console.log("home");
  }

function songsIndexControllerFunction($firebaseArray){
  console.log("songs");
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);
  }
