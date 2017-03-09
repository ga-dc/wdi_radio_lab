"use strict";

(function(){

  angular.module("radioSC", [
  	"ui.router",
  	"firebase"
  	])
  .config([
  	"$stateProvider",
  	RouterFunction
  	])
  
  .controller("SongIndexController", [
  	"$firebaseArray",
  	SongIndexControllerFunction
  	])
  

  function RouterFunction($stateProvider) {
  	$stateProvider
  		.state("SongIndex", {
  			url: '/',
  			templateUrl: "js/ng-views/index.html",
            controller: "SongIndexController",
            controllerAs: "vm"
  		})
  	

  	function SongIndexControllerFunction($firebaseArray){
      let ref = firebase.database().ref().child("songs");
  		this.songs = $firebaseArray
  	}
  }





})();
