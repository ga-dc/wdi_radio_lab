angular
.module("crazyApp", [
  "ui.router",
  "ngResource"
])
.config([$stateProvider,RouterFunction])
.factory("songfactory", "$resource",[songfactoryfunction])
.controller("songsshowcontroller",[songsshowcontrollerfunction])
function RouterFunction($stateProvider) {
  $stateProvider
  .state('index',{
    url: '/',
    controller: "songsController",
    controllerAs: 'vm'

  })
  .state('show',{
    url:'/songs',
    controller: "songsshowcontroller",
    controllerAs: 'vm',
    templeteUrl: "js/"
  })
}
function songfactoryfunction($resource){
  return $resource("http://localhost:3000/songs")
}
function songsshowcontrollerfunction(){
  this.songs = songfactory.query()
}
