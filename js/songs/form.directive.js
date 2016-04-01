(function(){
  angular
  .module("songs")
  .directive('songForm', [
    '$state',
    '$stateParams',
    function($state, $stateParams){
      return {
        templateUrl: 'js/songs/_song_form.html',
        replace: true,
        scope: {
          song: '=',
          formType: '@'
        },
        link: function(scope){
          scope.update = function(){
            scope.song.$update({id: $stateParams.id})
          }
          scope.create = function(){
            scope.song.$save(scope.song, function(song){
              $state.go('songShow', song);
            })
          }
        }
      }
  }]);
}());
