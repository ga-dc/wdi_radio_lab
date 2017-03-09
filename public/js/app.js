"use strict";

  (function()){
    angular
      .module("wdiradio", ["ui.router", "firebase"])
      .config(["$stateProvider", Router])
      .controller("RootController", [RootControllerFunction])
      .controller("WDIRadioIndexController", ["$firebaseArray", WDIRadioControllerFunction])

  }

// create templates for these routes

  // .controller("IGIndexController", [
  //   "IGFactory",
  //   "$state",
  //   IGNewControllerFunction
  // ])
  // .controller("IGShowController",[
  //   "IGFactory",
  //   "$stateParams",
  //   "$state",
  //   IGEditControllerFunction
  // ])
  //
  // function RouterFunction($stateProvider){
  //   $stateProvider
  //   .state("igIndex", {
  //     url: "/ig",
  //     templateUrl: "js/ng-views/index.html",
  //     controller: "IGIndexController",
  //     controllerAs: "vm"
  //   })
  //   .state("igNew", {
  //     url: "/ig/new",
  //     templateUrl: "js/ng-views/new.html",
  //     controller: "IGNewController",
  //     controllerAs: "vm"
  //   })
  //   .state("igShow", {
  //     url: "/ig/:id",
  //     templateUrl: "js/ng-views/show.html",
  //     controller: "IGShowController"
  //     controllerAs: "vm"
  //   })
  //   .state("igEdit", {
  //     url: "/ig/:id/edit",
  //     templateUrl: "js/ng-views/edit.html",
  //     controller: "IGEditController",
  //     controllerAs: "vm"
  //   })
  // }
  //
  // function IGFactoryFunction($resource){
  //   return $resource("http://localhost:3000/entries/:id",{}, {
  //     update: {method:"PUT"}
  //   })
  // }
  //
  // function IGIndexControllerFunction(IGFactory) {
  //   this.grams = IGFactory.query();
  // }
  //
  // function IGNewControllerFunction(IGFactory, $state){
  //   this.ig = new IGFactory();
  //   this.create = function(){
  //     this.ig.$save(function(gram) {
  //       $state.go("igShow", {id: ig.id})
  //     })
  //   }
  // }
  //
  // function IGShowControllerFunction(IGFactory, $stateParams) {
  //   this.ig = IGFactory.get({id: $stateParams.id});
  // }
  //
  // function IGEditControllerFunction(IGFactory, $stateParams, $state) {
  //   this.ig = IGFactory.get({id: $stateParams.id});
  //   this.update = function(){
  //     this.ig.$update({id: $stateParams.id}, function(ig) {
  //       $state.go("igShow", {id: ig.id})
  //     })
  //   }
  //   this.destroy = function(){
  //     this.ig.$delete({id: $stateParams.id}, function(){
  //       $state.go("igIndex")
  //     })
  //   }
  // }
