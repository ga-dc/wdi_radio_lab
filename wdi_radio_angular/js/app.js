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
		.state("radioShow", {
			url: "/songs/:id",
			controller: "RadioShowController",
			controllerAs: "vm",
			templateUrl: "js/ng-views/show.html"
		})
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

	function RadioFactoryFunction($resource){
		return $resource("http://localhost:3000/songs/:id.json")
		
	}

})();