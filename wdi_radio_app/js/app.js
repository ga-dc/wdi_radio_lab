"use strict";

(function() {
	let radioApp = angular
	.module("radioApp", ["ui.router","ngResource"])
	.config(["$stateProvider","$locationProvider",RouterFun])
	.controller("RadioIndexController", [
		"SongFactory",
		"$state",
		RadioIndexCtrlFun
	])
	.controller("RadioAllController", [
		"SongFactory", 
		"$state",
		RadioAllCtrlFun
	])
	.controller('RadioShowController', [
		"$state",
		"$stateParams",
		"SongFactory",
		RadioShowCtrlFun
	])
	.factory("SongFactory", [
		"$resource",
		SongFactoryFun
	])

	function RouterFun($stateProvider,$locationProvider) {
		$locationProvider.html5Mode(true);
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
		.state("songShow",{
			url: "/songs/:id",
			controller: "RadioShowController",
			controllerAs: "vmShow",
			templateUrl: "js/ng-views/show.html"
		})
	}
	function RadioIndexCtrlFun(SongFactory,$state) {

		} 
	function RadioAllCtrlFun(SongFactory,$state){
		this.songs = SongFactory.query()
		this.hide = false;
			this.newSong = new SongFactory()

			this.create = function(){
				this.newSong.$save().then(function(){
					$state.go("songAll")
				})
			}
	}
	function RadioShowCtrlFun($state,$stateParams,SongFactory){
		this.song = SongFactory.get({id: $stateParams.id})
		this.hide = false;
		this.update = function(){
			this.song.$update({id: $stateParams.id}).then(function(){
				$state.go("songAll")
			})
		}
		this.destroy = function(){
			this.song.$delete({id: $stateParams.id}).then(function(){
				$state.go("songAll")
			})
		}
	}
	function SongFactoryFun($resource) {
		return $resource("http://localhost:3000/songs/:id",{},{
			update: {method: "PUT"}
		})
	}

})()