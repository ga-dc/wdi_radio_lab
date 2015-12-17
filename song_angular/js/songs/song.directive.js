(function(){
  angular
  .module('songs')
  .directive('myCustomDirective', function(){
    return {
      template: '<h1>Hi There {{myName}}!</h1>',
      link: function(scope){
        scope.myName = 'Slim Shady';
      }
    }
  });
})();
