(function(){
  angular
  .module('songs')
  .directive('songPlayer', [
      "$firebaseArray",
      "$state",
      SongPlayerDirectiveFunction
  ])

    function SongPlayerDirectiveFunction($firebaseArray, $state){
      return{
        templateUrl: "public/js/wdi_radio/player.html",
        scope: {
          song: "="
        }
      }
    }
})();
