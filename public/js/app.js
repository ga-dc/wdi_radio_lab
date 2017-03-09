
function RouterFunction($stateProvider){
  $stateProvider
  .state("SpeakerIndex", {
    url: "/songs",
    templateUrl: "js/ng-views/index.html",
    controller: "RadioIndexCtrl",
    controllerAs: "vm"
  })
  .state("speaker", {
    url: "/songs/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "SpeakerCtrl",
    controllerAs: "vm"
  })
}

function SpeakerIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("songs")
  this.songs = $firebaseArray(ref);

  this.create = function() {
    this.songs.$add(this.newSong).then( () => this.newSong ={} )
  }

  this.update = function(song){
    this.songs.$save(song);
  }
}
angular
  .module("wdiSpeakerApp", ["ui.router", "firebase"])
  .config(["$stateProvider", RouterFunction])
  .controller("SpeakerIndexCtrl", ["$firebaseArray", SpeakerIndexControllerFunction])
  .controller("SpeakerShowCtrl", ["$stateParams", "$firebaseObject", SpeakerControllerFunction])


function SpeakerControllerFunction($stateParams, $firebaseObject){
  let ref = firebase.database().ref().child("songs/" + $stateParams.id)

}
