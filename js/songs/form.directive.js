(function(){
  angular
  .module("songs")
  .directive('songForm',[
    '$state',
    'SongFactory',
    '$stateParams',
    function($state, Song, $stateParams){
      return{
        templateUrl: 'js/songs/_song_form.html',
        replace: true,
        scope:{
          song: '=',
          formType: '@'
        },
        link: function(scope){
          console.log(scope)
          scope.create = function(){
            scope.song.$save(scope.song, function(song){
              console.log(song)
              $state.go('songShow', song);
            })
          }
          scope.update = function($stateParams){
            console.log(scope.song)
            console.log("connected!")
            scope.song.$update({id: $stateParams.id}, function(song){
              $state.go('songShow', song);
            })
          }
          scope.destroy = function($stateParams){
            console.log("connected!")
            scope.song.$delete({id: $stateParams.id}, function(song){
              $state.go('songIndex');
            })
          }
        }
      }
    }
  ])
}())
