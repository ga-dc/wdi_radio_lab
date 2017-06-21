"use strict";

(function() {
	let radioApp = angular
	.module("radioApp", ["ui.router","ngResource"])
	.config(["$stateProvider",RouterFun])
	.controller("RadioIndexController", [
		"SongFactory",
		function(){}
	])
	.controller("RadioAllController", [
		"SongFactory", 
		RadioAllCtrlFun
	])
	.factory("SongFactory", [
		"$resource",
		SongFactoryFun
	])

	function RouterFun($stateProvider) {
		// $locationProvider.html5Mode(true)
		$stateProvider
		.state("songIndex",{
			url: "/",
			controller: "RadioIndexController",
			controllerAs: "vm",
			templateUrl: "js/ng-views/index.html"
		})
		.state("songAll",{
			url: "/songs",
			controller: "RadioAllController",
			controllerAs: "vmAll",
			templateUrl: "js/ng-views/all.html"
		})
		// .state("songShow",{})
	}
	// function RadioIndexCtrlFun() {}
	function RadioAllCtrlFun(SongFactory){
		this.songs = SongFactory.query()
	}
	function SongFactoryFun($resource) {
		return $resource("http://localhost:3000/songs")
	}

})()