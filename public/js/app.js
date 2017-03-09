
angular
  .module("wdiRadioApp", ["ui.router", "firebase"])
  .config(["$stateProvider", RouterFunction])
  .controller("RadioIndexCtrl", ["$firebaseArray", RadioIndexControllerFunction])
  .controller("RadioShowCtrl", ["$stateParams", "$firebaseObject", RadioShowControllerFunction])

function RouterFunction($stateProvider){
  $stateProvider
  .state("radioIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "RadioIndexCtrl",
    controllerAs: "vm"
  })
  .state("radioShow", {
    url: "/songs/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "RadioShowCtrl",
    controllerAs: "vm"
  })
}

function RadioIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref);

  this.create = function() {
    this.songs.$add(this.newSong).then( () => this.newSong ={} )
  }

  this.update = function(){
    this.song.$save();
  }
}

function RadioShowControllerFunction($stateParams, $firebaseObject){
  let ref = firebase.database().ref().child("songs/" + $stateParams.id)

}
