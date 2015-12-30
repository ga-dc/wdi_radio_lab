(function(){
  angular
  .module("songs")
  .directive("songDirective", [
    "SongFactory",
    "$state",
    SongDirectiveFunction
  ])

  function SongDirectiveFunction(SongFactory, $state){
    return{
      templateUrl: "js/songs/_song_index.html",
      scope: {
        song: '='
      }
    };
  }

})();
