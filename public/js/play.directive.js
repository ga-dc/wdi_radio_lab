(function(){
	angular
	.module('wdiradio')
	.directive('play', ['$state', '$sce', playFunction]);

	function playFunction($state, $sce) {
	  return {
	    templateUrl: 'js/_play.html',
	    link: linkFunction
	  }
  		function linkFunction(scope) {
   		scope.go = function(song) {
	      	scope.playing = song;
	      	scope.playing.audio_url = $sce.trustAsResourceUrl(song.audio_url)
			}
		}
	}
})();