(function() {
  angular
    .module('songs')
    .directive('songForm', ['$state', 'SongFactory', songForm]);

  function songForm($state, SongFactory) {
    return {
      templateUrl: '/js/songs/_song_form.html',
      replace: true,
      scope: {
        song: '=',
        formType: '@'
      },
      link: createFunction
    }

    function createFunction(scope){
      scope.create = function(){
        SongFactory.save(scope.song, function(song){
          $state.go('songsIndex');
        })
      }
      scope.update = function(){
        scope.song.$update({id: scope.song.id}, function(song){
            $state.go('songsIndex');
        })
      }
      // scope.delete = function(){
      //   scope.song.$delete({id: scope.song.id}, function(){
      //     $state.go('songsIndex');
      //   })
      // }
    }
  }
})();
