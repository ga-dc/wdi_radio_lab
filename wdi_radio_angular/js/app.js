angular
	.module("radio", ["ui.router"])
	.config(["$stateProvider", Router])
	.controller("RadioWelcomeController", [
		RadioWelcomeControllerFunction
		])
	.controller("RadioIndexController", [
		RadioIndexControllerFunction
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

	function RadioIndexControllerFunction(){
		console.log("and I'm in the index controller!")
	}