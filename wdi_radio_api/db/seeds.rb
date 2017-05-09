# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.destroy_all


Song.create(
title: "Star Roving",
album: "Dead Ocean",
img_url: "http://cdn2.pitchfork.com/albums/24840/homepage_large.61de16ab.jpg",
artist: "Slowdive",
genre: "Rock"
)

Song.create(
title: "Call the police",
album: "American Dream",
img_url: "http://cdn3.pitchfork.com/tracks/19067/list.84fb3972.jpg",
artist: "LCD Soundsystem",
genre: "Electronic"
)

Song.create(
title: "Leave Me Alone",
album: "Tough Love",
img_url: "http://cdn3.pitchfork.com/albums/24822/homepage_large.3f83572f.jpg",
artist: "Priests",
genre: "Rock"
)
