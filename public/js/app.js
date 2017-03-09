angular
  .module("wdiradio", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("RadioIndexController", [
    "$firebaseArray",
    RadioIndexControllerFunction
  ])
  .controller("RadioShowController", [
    "$stateParams",
    "$firebaseObject",
    RadioShowControllerFunction
  ])


  function RouterFunction($stateProvider){
      $stateProvider
        .state("radioIndex", {
          url: "/radios",
          templateUrl: "js/nj-views/index.html",
          controller: "RadioIndexController",
          controllerAs: "vm"
        })
        .state("radioShow", {
          url: "/radios/:id",
          templateUrl: "js/nj-views/show.html",
          controller: "RadioShowController",
          controllerAs: "vm"
        })
    }

    function RadioIndexControllerFunction($firebaseArray){
      let ref = firebase.database().ref();
      this.radios = $firebaseArray(ref);

      this.create = function(){
        this.radios.$add(this.newRadio).then( () => this.newRadio = {})
      }

      this.delete = function(radio){
        this.radios.$remove(radio)
      }
    }

      function RadioShowControllerFunction($stateParams, $firebaseObject){
        let ref = firebase.database().ref("/" + $stateParams.id);
        $firebaseObject(ref).$loaded().then(radio => this.radio = radio)


      this.update = function(){
        this.radio.$save();
      }
  }
