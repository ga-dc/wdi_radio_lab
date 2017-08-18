(function () {

  angular
    .module('wdiRadio')
    .controller('SongsIndex', [
      'Song',
      '$sce',
      SongsIndex
    ])
    .controller('SongsShow', [
      '$stateParams',
      '$sce',
      'Song',
      SongsShow
    ])
    .controller('SongsNew', [
      '$state',
      'Song',
      'Album',
      'Artist',
      SongsNew
    ])
    .controller('SongsEdit', [
      '$stateParams',
      '$state',
      'Song',
      SongsEdit
    ])

  function SongsIndex (Song, $sce) {
    this.songs = Song.query()
    this.selectSong = function (song) {
      song.preview_url
      song.preview_url = $sce.trustAsResourceUrl(song.preview_url)
      console.log(song.album.image_url)
      song.album.image_url = song.album.image_url.replace('100x100', `200x200`)
      this.selectedSong = song
    }
  }

  function SongsShow($stateParams, $sce, Song) {
    this.song = Song.get({ id: $stateParams.id }, (song) => {
      song.preview_url = $sce.trustAsResourceUrl(song.preview_url)
      return song
    })
  }

  function SongsNew($state, Song, Album, Artist) {
    this.song = new Song()
    this.albums = Album.query()
    this.artists = Artist.query()

    this.create = function () {
      this.song.$save().then((res) => {
        $state.go('songsShow', { id: res.id })
      })
    }

    this.updateAlbumList = function () {
      Artist.get({ id: this.song.artist_id }, (res) => {
        this.albums = res.albums
      })
    }

    this.updateArtistList = function () {
      Album.get({ id: this.song.album_id }, (res) => {
        this.selectedArtist = res.artist
      })
    }
  }

  function SongsEdit($stateParams, $state, Song) {
    this.song = Song.get({ id: $stateParams.id })
    this.update = function () {
      this.song.$update({ id: this.song.id }).then((res) => {
        $state.go('songsShow', { id: res.id })
      })
    }
    this.destroy = function () {
      this.song.$delete({ id: this.song.id }).then(() => {
        $state.go('songsIndex')
      })
    }
  }

})()
