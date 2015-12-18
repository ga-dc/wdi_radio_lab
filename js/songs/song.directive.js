(function(){
  angular
  .module("songs")
  .directive("songShow", [
    "$sce",
    function($sce){
      return {
        templateUrl: 'js/songs/_song_show.html',
        restrict: "A",
        replace: true,
        scope: {
          song: '=',
          type: '@'
        },
        link: function(scope){
          scope.song.audio_url = $sce.trustAsResourceUrl(scope.song.audio_url);
        }
    }
  }]);
}());
