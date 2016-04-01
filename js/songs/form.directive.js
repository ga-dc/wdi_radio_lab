(function(){
  angular
  .module('songs')
  .directive('songForm',[
    '$state',
    'songFactory',
    function($state, song){
      return {
        templateUrl: 'js/songs/_song_form.html',
        replace: true,
        scope: {
          song: '=',
          formType: '@'
        },
        link: function(scope){
          scope.create = function(){
            scope.song.$save(scope.song, function(song) {
              $state.go('songShow', song);
            });
          }
        }
      }
    }]
  );
})();
