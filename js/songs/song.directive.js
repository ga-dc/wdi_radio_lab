(function(){
  angular
  .module('songs')
  .directive('songShow', function(){
    return {
      templateUrl: "/js/songs/_song_show.html",
      replace: true,
      controller: "SongIndexController",
      restrict: 'E', // comMent Attribute Class Element
      scope: {
        song: '=', //@ - string = - object
        showLink: '=',
        vm: '='
      },
      link: function(scope){ //function run when directive is loaded
        scope.selectSong = function(song){
          scope.vm.play(song);
        }
      }
    }
  });
})();
