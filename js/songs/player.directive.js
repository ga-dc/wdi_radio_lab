(function(){
  angular
    .module("songs")
    .directive("songPlayer", [
      "SongFactory",
      "$sce",
      "$state",
      SongPlayerDirectiveFunction
    ])
    function SongPlayerDirectiveFunction(SongFactory, $sce, $state){
      return {
        templateUrl: "js/songs/player.html",
        scope: {
          song: "="
        }
      }
    }
})();
