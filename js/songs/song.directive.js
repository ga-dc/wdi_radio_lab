(function(){
  angular
  .module('songs')
  .directive('songShow', function(){
    return {
      templateUrl: "/js/songs/_song_show.html",
      replace: true,
      restrict: 'E', // comMent Attribute Class Element
      scope: {
        song: '=', //@ - string = - object
        showLink: '='
      },
      link: function(scope){ //function run when directive is loaded
      }
    }
  });
})();
