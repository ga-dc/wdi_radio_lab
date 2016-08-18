"use strict";

(function() {
	angular
	.module("wdiradio")
	.controller("HomeController", [
		"$firebaseArray",
   	HomeControllerFunction
	]);

	function HomeControllerFunction($firebaseArray) {
		console.log("Herro from HomeControllerFunction")
	}
}());