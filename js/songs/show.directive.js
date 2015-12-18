(function(){
  angular
  .module("songs")
  .directive("songShow", [
    'SongFactory',
    '$state',
    SongPlayerDirectiveFunction
  ])
    function SongPlayerDirectiveFunction(SongFactory, $state){
    return{
      templateUrl: "js/songs/_song_show.html",
      scope: {
        song: "="
      },
    }
  }
})();
