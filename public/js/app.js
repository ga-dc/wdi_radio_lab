"use strict";


// let wdiradioData= [
//   {id: 0, photo_url: "http://www.famoussportspeople.com/wp-content/uploads/2016/04/michael-jordan-basketball-sport-wallpapers-hd-wallpapers-hd-celebrities-sports-photo-michael-jordan-wallpaper.jpg", author: "Michael Jordan", body: "Bulls"},
//   {id: 1, photo_url: "http://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2016/03/21/lebron-james-cavs-twitter.jpg?itok=FTe2EJhf", author: "LeBron James", body: "Cavaliers"},
//   {id: 2, photo_url: "http://www.trbimg.com/img-54c81b82/turbine/la-sp-ln-kobe-bryant-final-season-career-reward-20150127", author: "Kobe Bryant", body: "Lakers"},
//   {id: 3, photo_url: "https://i.ytimg.com/vi/Fa_lw05TppE/maxresdefault.jpg", author: "Steph Curry", body: "Warriors"},
// ]


// add a state for the routes '/' and /songs
  .state "/", "/songs"[]

// create templates for these routes
angular
  .module("wdiradio", ["ui.router", "ngResource"])
  .config(["$stateProvider", RouterFunction])
  .factory("wdiradioFactory", [
    "$resource",
    WDIRadioFactoryFunction
  ])
  .controller("WDIRadioIndexController", [
    "WDIRadioFactory",
    WDIRadioIndexControllerFunction
  ])
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
