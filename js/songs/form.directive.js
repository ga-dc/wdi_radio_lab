(function(){
  angular
  .module('songs')
  .directive('songForm', [
    "$state",
    directiveFunction
  ])

  function directiveFunction($state){
    return {
      templateUrl: 'js/songs/_song_form.html',
      replace: true,
      scope: {
        song: '=',
        formType: '@',
        songs: '='
      },
      link: function(scope){
        scope.create = function(){
          scope.song.$save(scope.song, function(song) {
            scope.songs.push(song)
            $state.go('songIndex');
          });
        }
        scope.edit = function(){
          scope.song.$update({id: scope.song.id})
        }
        scope.destroy = function(){
          scope.song.$delete({id: scope.song.id}, function(song){
            $state.go('songIndex', {}, {refresh:true});
          });
        }
      }
    }
  };
})();
