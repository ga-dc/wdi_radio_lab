"use strict";

(function(){
  angular
  //call main app
  //declare a dependency on the ngResource module ($resource is a factory that lets you interact with RESTful backends easily)
  .module("entries")
  .controller("RadioShowController", [
    "RadioFactory",
    "$stateParams",
    RadioShowControllerFunction
  ]);

  function RadioShowControllerFunction(RadioFactory, $stateParams) {
    this.radio =  RadioFactory.get({id: $stateParams.id});
  }
}());
