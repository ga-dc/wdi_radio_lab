"use strict";

angular
	.module("radioApp", [
		"ui.router",
		"ngResource"
	])
	.config([
		"$stateProvider", 
		RouterFunction
	])
	.factory( "SongFactory", [
		"$resource",
		SongFactoryFunction 
	 ])
	.controller("SongIndexController", [
		"SongFactory", 
		SongIndexControllerFunction
	])
	.controller("SongEditController", [
		"SongFactory",
		"$stateParams",
		"$state",
		SongEditControllerFunction
	])
	.controller("SongShowController", [
		"SongFactory",
		"$stateParams",
		"$state",
		SongShowControllerFunction
	])


function RouterFunction($stateProvider) {
	$stateProvider
	.state("songIndex", {
		url: "/",
		templateUrl: "/js/ng-views/index.html",
		controller: "SongIndexController",
		controllerAs: "vm"
	})
	.state("songShow", {
		url: "/songs/:id",
		templateUrl: "/js/ng-views/show.html",
		controller: "SongShowController",
		controllerAs: "vm"
	})
	.state('songEdit', {
		url: "/songs/:id/edit",
		templateUrl: "/js/ng-views/edit.html",
		controller: "SongEditController",
		controllerAs: "vm"
	})
}

function SongIndexControllerFunction( SongFactory ) {
	this.songs = SongFactory.query();
	console.log(this.songs)
}

function SongShowControllerFunction( SongFactory, $stateParams) {
	this.song = SongFactory.get({id: $stateParams.id})
	console.log(this.song)
}

function SongEditControllerFunction( SongFactory, $stateParams, $state) {
	this.song = SongFactory.get({id: $stateParams.id})
	this.update = function(data) {
		this.song.$update({id: $stateParams.id}, function(data){
			$state.go('songShow', {id: data.id})
		})
	}
}

function SongFactoryFunction($resource) {
	return $resource( "http://localhost:3000/songs/:id", {}, {
	    update: { method: "PUT" }
	  })
}
