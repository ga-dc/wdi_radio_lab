angular
	.module("radio", ["ui.router", "ngResource"])
	.config(["$stateProvider", Router])
	.controller("RadioWelcomeController", [
		RadioWelcomeControllerFunction
		])
	.controller("RadioIndexController", [
		"RadioFactory",
		RadioIndexControllerFunction
		])
	.factory("RadioFactory", [
		"$resource",
		RadioFactoryFunction
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
	}

	function RadioWelcomeControllerFunction(){
		console.log("I'm in the welcome controller!")
	}

	function RadioIndexControllerFunction(RadioFactory){
		console.log("and I'm in the index controller!")
		this.songs = RadioFactory.query();
	
	}

	function RadioFactoryFunction($resource){
		return $resource("http://localhost:3000/songs/:id")
		}
	}