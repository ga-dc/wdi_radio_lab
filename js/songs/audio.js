angular.module('songs', [])
.controller('MyController', ['$scope', function($scope) {
  // $scope.username = 'World';

  $scope.getAudioUrl = function(song) {
  return $sce.trustAsResourceUrl(song.audio_url);
  };
}]);
