# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Song.destroy_all


  Song.create(title: "Electric Love Letter", artist: "Langhorne Slim", album: "The Electric Love Letter", img_url:"https://i.scdn.co/image/305ac7f45832bcfd9090605c8b5ca9da682e5c87")
  Song.create(title: "Horns", artist: "Bryce Fox" , album: "(single)", img_url:"https://i.scdn.co/image/e9b350c1a389aa80d05aff3d7e59058b4166772b")
  Song.create(title: "Let's Get Drunk and Get It On", artist: "Old 97s", album: "Most Messed Up", img_url:"http://images.genius.com/d2415e3cb3ece6ac377bc547ef94fd40.1000x1000x1.jpg")
  Song.create(title: "River", artist: "Bishop Briggs", album: "Bishop Briggs", img_url:"https://i2.wp.com/atwoodmagazine.com/wp-content/uploads/2017/04/Bishop-Briggs-2017-press-1.jpg")
  Song.create(title: "Nancy Mulligan", artist: "Ed Sheeran", album: "Divide", img_url:"https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png")
  Song.create(title: "Outlaws", artist: "Delta Rae", album: "After It All", img_url:"https://glidemagazine.com/wp-content/uploads/2015/04/deltarae6-578x578.jpg")
  Song.create(title: "Fur Coat Blues", artist: "Jamestown Revival", album: "Utah", img_url:"http://finetuningbyfogelson.com/wp-content/uploads/2015/03/Jamestown-Revival-NEW-COVER_SM1.jpg")
