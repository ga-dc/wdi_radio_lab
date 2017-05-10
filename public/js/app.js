angular
  .module("radioLab", ["ui.router", "ngResource"])
  .config([$stateProvider, RouterFunction])
  .factory("SongFactory", ["$resource", SongFactoryFunction])
  .controller("songsController", [songsControllerFunction])

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("index", {
        url: "/",
      })
      .state("show", {
        url: "/songs",
        controller: "songsController",
        controllerAs: "vm"
      })

      function SongFactoryFunction($resource) {
        return $resource("http://localhost:3000/songs")
      }

      function songsControllerFunction() {
        this.songs = SongFactory.query()
      }
  }
