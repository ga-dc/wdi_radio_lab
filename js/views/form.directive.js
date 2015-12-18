(function(){
  angular
  .module("songs")
    .directive("songForm", [
      '$state',
      'SongFactory',
      directiveFunction
    ]);

    function directiveFunction($state, song){
      return {
        templateUrl: "/js/views/_song_form.html",
        replace: true,
        scope: {
          song: '=',
          formType: '@'
        },
        link: function(scope){
          scope.create = function(){
            scope.song.$save(scope.song, function(song){
              $state.go('songShow', song, {reload: true})
            });
          }
          scope.update = function(){
            scope.song.$update(scope.song, function(song){
              $state.go('songShow', song, {reload: true})
            });
          }
          scope.delete = function(){
            scope.song.$delete({id: scope.song.id}, function(){
              $state.go('songIndex', {}, {reload: true})
            })
          }
        }
      }
    }
})();
