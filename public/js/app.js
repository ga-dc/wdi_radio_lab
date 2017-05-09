angular
  .module("wdiradio", [
  	"ui.router",
  	"firebase",
  	])
  .config([
  	"$stateProvider",
  	RouterFunction
  	])
  .controller("SongIndexController", [
  	"$firebaseArray",
  	SongIndexControllerFunction
  	])

  	function RouterFunction($stateProvider){
  		$stateProvider
  		  .state("welcome", {
  		  	url: "",
  		  	templateUrl: "js/ng-views/welcome.html"
  		  })
  		  .state("songIndex", {
  		  	url: "/songs",
  		  	templateUrl: "js/ng-views/index.html",
  		  	controller: "SongIndexController",
  		  	controllerAs: "vm"
  		  })
  	}

  	function SongIndexControllerFunction($firebaseArray){
  		let ref = firebase.database().ref().child("songs");
  		this.songs = $firebaseArray(ref);
  		console.log(this.songs)
  		this.newSong = {}
  		this.create = function() {
  			this.songs.$add(this.newSong).then( () => this.newSong = {} )
  		}
  	}
  	function myFunction() {
    	var x = document.getElementById("file").value;
    	document.getElementById("filepath").value = x;
	}
