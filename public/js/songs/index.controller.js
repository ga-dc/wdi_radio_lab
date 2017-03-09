"use strict";

(function(){
  angular
  //call main app
  //declare a dependency on the ngResource module ($resource is a factory that lets you interact with RESTful backends easily)
  .module("radios")
  .controller("RadioIndexController", [
    "RadioFactory",
    RadioIndexControllerFunction
  ]);

  function RadioIndexControllerFunction(RadioFactory) {
    // Whenever `.radios` is called on our ViewModel, it returns the response from `.query()`
    var vm = this;
    this.radios = RadioFactory.query();


    vm.create = function(){
      vm.grumbles.$add(vm.newRadio).then(function(){
        vm.newRadio = {};
      });
    }

    vm.delete = function(radio){
      vm.radios.$remove(radio)
    }
  }
}());
