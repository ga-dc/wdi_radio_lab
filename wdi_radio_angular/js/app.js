"use strict";

(function(){

angular
	.module("radio", ["ui.router", "ngResource"])
	.config(["$stateProvider", Router])
	.factory("RadioFactory", [
		"$resource",
		RadioFactoryFunction
		])
	.controller("RadioWelcomeController", [
		RadioWelcomeControllerFunction
		])
	.controller("RadioIndexController", [
		"RadioFactory",
		RadioIndexControllerFunction
		])
	.controller("RadioShowController", [
		"RadioFactory",
		"$stateParams",
		RadioShowControllerFunction
		])
	.controller("RadioNewController", [
		"RadioFactory",
		"$state",
		RadioNewControllerFunction
		])
	


	function Router($stateProvider){
		$stateProvider
		.state("radioWelcome", {
			url: "/", 
			controller: "RadioWelcomeController",
			controllerAs: "vm",
			templateUrl: "js/ng-views/welcome.html"
		})
		.state("radioIndex", {
			url: "/songs",
			controller: "RadioIndexController",
			controllerAs: "vm",
			templateUrl: "js/ng-views/index.html"
		})
		//new must be put before show
		.state("radioNew", {
			url: "/songs/new",
			controller: "RadioNewController",
			controllerAs: "vm",
			templateUrl: "js/ng-views/new.html"
		})
		.state("radioShow", {
			url: "/songs/:id",
			controller: "RadioShowController",
			controllerAs: "vm",
			templateUrl: "js/ng-views/show.html"
		})
	
	}

	function RadioFactoryFunction($resource){
		return $resource("http://localhost:3000/songs/:id.json")
		
	}

	function RadioWelcomeControllerFunction(){
		console.log("I'm in the welcome controller!")
	}

	function RadioIndexControllerFunction(RadioFactory){
		console.log("and I'm in the index controller!")
		this.songs = RadioFactory.query();
	}

	function RadioShowControllerFunction(RadioFactory, $stateParams) {
		this.song = RadioFactory.get({id: $stateParams.id});
	}

	function RadioNewControllerFunction(RadioFactory, $state) {
		this.song = new RadioFactory();
		this.create = function(){
			this.song.$save( function(song) {
				$state.go("radioShow", {id: song.id})
			})
		}
	}

	

})();