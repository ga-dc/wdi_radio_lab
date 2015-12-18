'use strict';

(function(){
  angular
  .module('radio')
  .directive('songShow', function($sce) {
  return {
    scope: { code:'=' },
    replace: true,
    template: '<audio ng-src="{{url}}" controls></audio>',
    link: function (scope) {
        scope.$watch('code', function (newVal, oldVal) {
           if (newVal !== undefined) {
               scope.url = $sce.trustAsResourceUrl("/data/media/" + newVal);
           }
        });
    }
  };
});