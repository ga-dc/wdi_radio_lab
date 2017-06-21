angular
.module("wdiRadio", [
  "ui.router",
  "firebase"
])
.config([
  "$stateProvider",
  RouterFunction
])
.controller("WdiRadioIndexController", [
  "$firebaseArray",
  WdiRadioIndexControllerFunction
])


function RouterFuction($stateProvider){
  $stateProvider
  .state("WdiRadioIndex", {
    url: "/songs",
    templateUrl: "js/ng-veiws.index.html",
    controller: "WdiRadioIndexController",
    controllerAs: "vm"  
  })
}





function WdiRadioIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs");
  this.songs = $firebaseArray(ref);
}
