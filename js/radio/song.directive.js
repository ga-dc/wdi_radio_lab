(function(){
  angular
  .module("radio")
  .directive("songShow", function(){
    return {
      templateUrl: 'js/radio/_song_show.html',
      replace: true,
      scope: {
        song: '='
      }
    }
  });
})();