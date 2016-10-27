angular
.module("wdiRadioApp", [
  "ui.router",
  "firebase"
])

.config([
  "$stateProvider",
  RouterFunction
])

.controller("wdiRadioIndexController", [
  "$firebaseArray",
  wdiRadioIndexControllerFunction
])
.controller("wdiRadioShowController", [
    "$stateParams",
    "$firebaseObject",
    wdiRadioShowControllerFunction
])


function RouterFunction($stateProvider) {
  $stateProvider
    .state("wdiRadioIndex", {
      url: "/wdiRadio",
      templateUrl: "js/ng-views/index.html",
      controller: "wdiRadioIndexController",
      controllerAs: "vm"
    })
    .state("wdiRadioShow", {
        url: "/wdiRadio/:id",
        templateUrl: "js/ng-views/show.html",
        controller: "wdiRadioShowController",
        controllerAs: "vm"
    })
}


function wdiRadioIndexControllerFunction($firebaseArray){
    let ref = firebase.database().ref();
    this.wdiRadio = $firebaseArray(ref);
    this.create = function(){
      this.wdiRadio.$add(this.newwdiRadio).then( () => this.newwdiRadio = {} )
    }
    this.delete = function(wdiRadio){
      this.wdiRadio.$remove(wdiRadio)
    }
  }
  function wdiRadioShowControllerFunction($stateParams, $firebaseObject){
      let ref = firebase.database().ref("/" + $stateParams.id);
      $firebaseObject(ref).$loaded().then(wdiRadio => this.wdiRadio = wdiRadio)
      this.update = function(){
        this.wdiRadio.$save();
      }
    }
