(function(){

  'use strict';

  angular
  .module('songs')
  .directive('songDirective', function(){
    return {
      templateUrl: 'js/songs/_songs_show.html',
      replace: true,
      scope: {
        song: '=',
        showLink: '='
},
link: function(scope){

}
    };
  });
})();
