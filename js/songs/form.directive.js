(function(){
  angular
    .module('songs')
    .directive('songForm',[
    '$state',
    'SongFactory',
    songForm
  ]);

  function songForm($state, SongFactory){
    return {
      templateUrl: 'views/songs/_song_form.html',
      replace: true,
      scope: {
        song: '=',
        formType: '@'
      },
      link: linkFunction
    }
    function linkFunction(scope){
      scope.create = function(){
        SongFactory.save(scope.song, function(song) {
          $state.go('/songs/' + song.id);
        });
      }
      scope.update = function(){
        scope.song.$update(scope.song, function(song) {
          $state.go('songShow', song);
        });
      }
      scope.destroy = function(){
        scope.song.$delete(scope.song, function(song) {
          $state.go('songIndex');
        });
      }
    }
  }
})();
