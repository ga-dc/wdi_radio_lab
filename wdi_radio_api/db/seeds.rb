# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.destroy_all

myhood = Song.create({
  title: "My Hood",
  artist: "RAY BLK",
  album: "Durt",
  cover_art: "http://www.rnbass.com/wp-content/uploads/2016/10/ray-blk-durt-album-rnbass.jpg"
})

saturnzbarz = Song.create({
  title: "Saturnz Barz ft. Popcaan",
  artist: "Gorillaz",
  album: "Humanz",
  cover_art: "http://images.genius.com/2f1275af339dae214d948ab1152c112d.1000x1000x1.jpg"
})

myhood = Song.create({
  title: "Something About Us",
  artist: "Daft Punk",
  album: "Discovery",
  cover_art: "http://vignette2.wikia.nocookie.net/daftpunk/images/f/f3/Discovery_%28Album_Art%29.jpg/revision/latest?cb=20100608175747"
})

myhood = Song.create({
  title: "Needed Me",
  artist: "Rihanna",
  album: "ANTI",
  cover_art: "https://artistxite.com/imgcache/album/005/108/005108127_500.jpg"
})

myhood = Song.create({
  title: "Pon Di Cocky",
  artist: "Aidonia",
  album: "Aidonia",
  cover_art: "http://static.qobuz.com/images/covers/45/96/0887158349645_600.jpg"
})
