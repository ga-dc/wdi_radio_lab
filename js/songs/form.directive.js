(function(){
  angular
  .module("songs")
  .directive('songForm',[
    '$state',
    'SongFactory',
    function($state, Song){
      return{
        templateUrl: 'js/songs/_song_form.html',
        replace: true,
        scope:{
          song: '=',
          formType: '@'
        },
        link: function(scope){
          console.log("linked")
          scope.create = function(){
            scope.song.$save(scope.song, function(song){
              console.log(song)
              $state.go('songShow', song);
            })
          }
          scope.update = function(){
            console.log("connected!")
          }
        }
      }
    }
  ])
}())
