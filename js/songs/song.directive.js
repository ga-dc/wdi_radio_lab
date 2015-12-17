(function(){
  angular
  .module("songs")
  .directive("songShow", function(){
    return {
      templateUrl: 'js/songs/_song_show.html',
      restrict: "A",
      replace: true,
      scope: {
        song: '=',
        type: '@'    
      }
    }
  });
}());
