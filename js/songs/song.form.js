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
      link: linkFunction
    }

    function linkFunction(scope){
      scope.create = function(){
        SongFactory.save(scope.song, function(song){
          $state.go('songsIndex');
        });
      }
    }
  }
})();
