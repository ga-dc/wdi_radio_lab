angular
.module("radio", ["ui.router", "firebase"])
.controller("RadioController", ["$firebaseArray", RadioControllerFuntion])
.config([
  "$stateProvider",
  RouterFunction
])
.controller("RadioShowController", [
  "$stateParams",
  "$firebaseObject",
  RadioShowControllerFunction
])

function RouterFunction($stateProvider){
  $stateProvider
    .state("radioIndex", {
      url: "/songs",
      templateUrl: "js/ng-views/index.html",
      controller: "RadioController",
      controllerAs: "vm"
    })
    .state("radioShow", {
      url: "/songs/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "RadioShowController",
      controllerAs: "vm"
    })
}

    function RadioControllerFuntion($firebaseArray){
      let ref = firebase.database().ref().child("radios");
      this.radios = $firebaseArray(ref);
      this.newRadioText = {}
      this.create = function() {
        this.radios.$add(this.newRadioText).then( () => this.newRadioText = {} )
        console.log("working")
      }
      this.update = function (radio) {
        this.radios.$save(radio)
      }
      this.delete = function (radio) {
        this.radios.$remove(radio)
      }
    }

    function RadioShowControllerFunction($stateParams, $firebaseObject) {
   let ref = firebase.database().ref().child("songs/" + $stateParams.id)
   $firebaseObject(ref).$loaded().then(radio => this.radio = radio
   )}
