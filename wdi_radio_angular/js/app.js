let songsData = [
  { title: 'Get Lucky'},
  { title: 'Beyond'},
  { title: 'Instant Crush'}
]

angular
.module("wdi-radio", [])

.controller("SongsController", [
    SongsControllerFunction
  ])

  function SongsControllerFunction () {
    this.songs = songsData
  }
