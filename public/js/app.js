angular
   .module("wdiradio", [
     "ui.router",
     "firebase"
   ])
   .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("WdiradioIndexController", [
   "$firebaseArray",
   WdiradioIndexControllerFunction
 ])
 .controller("WdiradioShowController", [
   "$stateParams",
   "$firebaseObject",
   WdiradioShowControllerFunction
 ])

 function WdiradioIndexControllerFunction($firebaseArray){
   let ref = firebase.database().ref().child("wdiradios");
   this.wdiradios = $firebaseArray(ref);
   this.create = function(){
     this.wdiradios.$add(this.newwdiradio).then( () => this.newwdiradio = {} )
   }
   this.update = function(){
     this.wdiradio.$save();
   }
   this.delete = function(wdiradio){
      this.wdiradios.$remove(wdiradio)
    }
 }

  function WdiradioShowControllerFunction($stateParams, $firebaseObject){
    let ref = firebase.database().ref().child("wdiradios/" + $stateParams.id);
    $firebaseObject(ref).$loaded().then(wdiradio => this.wdiradio = wdiradio)

    }



function RouterFunction($stateProvider){
  $stateProvider
  .state("wdiradioIndex", {
    url: "/wdiradios",
    templateUrl: "js/ng-views/index.html",
    controller: "WdiradioIndexController",
    controllerAs: "vm"
  })
  .state("wdiradioShow", {
    url: "/wdiradios/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "WdiradioShowController",
    controllerAs: "vm"
})
}
