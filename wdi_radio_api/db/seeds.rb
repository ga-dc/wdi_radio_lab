# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Song.destroy_all


Song.create!(title: "Harder Better Faster Stronger", album: "Discovery", artist: "Daft Punk", genre: "Dance/Electronic", preview_url: "https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg")
Song.create!(title: "Yellow", album: "Parachutes", artist: "Coldplay", genre: "Pop", preview_url: "https://upload.wikimedia.org/wikipedia/en/5/57/Coldplayparachutesalbumcover.jpg")
Song.create!(title: "Gold Digger", album: "Late Registration", artist: "Kanye West", genre: "Hiphop/Rap", preview_url: "https://upload.wikimedia.org/wikipedia/en/f/f4/Late_registration_cd_cover.jpg")
Song.create!(title: "Hotline Bling", album: "Views", artist: "Drake", genre: "Hiphop/Rapp", preview_url: "https://upload.wikimedia.org/wikipedia/en/6/64/Drakeviewsfromthe6.jpg")
Song.create!(title: "All of Me", album: "Love in the Future", artist: "John Legend", genre: "R&B/Soul", preview_url: "https://upload.wikimedia.org/wikipedia/en/6/64/John_Legend_Love_in_the_Future.jpg")
