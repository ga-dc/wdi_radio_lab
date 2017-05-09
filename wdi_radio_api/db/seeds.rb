# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.destroy_all

riff_raff = Song.create({
  song: "TiP TOE WiNG iN MY JAWWDiNZ",
  album_art_url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/RiFFRAFFNeonIconCover.jpg/220px-RiFFRAFFNeonIconCover.jpg",
  album: "Neon Icon",
  song_url: "https://soundcloud.com/riffraffradio/riff-raff-tip-toe-wing-in-my-jawwwdinz",
  artist: "Riff Raff"
})

owen = Song.create({
  song: "Bird in hand",
  album_art_url: "https://f4.bcbits.com/img/a3137103707_10.jpg",
  album: "At Home with Owen",
  song_url: "https://www.youtube.com/watch?v=I2IZbnsdzOk",
  artist: "Owen"
})

suicide_boys = Song.create({
  song: "Back from the Dead",
  album_art_url: "https://f4.bcbits.com/img/a1829342645_10.jpg",
  album: "",
  song_url: "https://soundcloud.com/rewingus/uicide-boy-back-from-the-dead",
  artist: "$uicide Boy$"
})

jabroni = Song.create({
  song: "Jabroni",
  album_art_url: "http://3.bp.blogspot.com/-plem4KuC6-I/T43lX6Pc5II/AAAAAAAAVoA/GXCz6mc82bU/s400/the%2Brock%2Bdwayne%2Bjohnson.jpg",
  album: "The Jabronis united",
  song_url: "https://soundcloud.com/rewingus/uicide-boy-back-from-the-dead",
  artist: "Jabroni Squad"
})
