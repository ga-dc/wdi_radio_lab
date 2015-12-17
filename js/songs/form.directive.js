(function(){
  angular
  .module('songs')
  .directive('songForm', function(){
    return {
      templateUrl: 'js/songs/_song_form.html',
      replace: true,
      scope: {
        song: '='
      }
    }
  });
})();
