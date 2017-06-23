# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.destroy_all

Song.create(title: 'Florasia', artist: 'Taylor McFerrin', album: 'Early Riser', photo_url: 'http://cdn3.pitchfork.com/albums/20623/homepage_large.c2050df7.jpg')
Song.create(title: 'Skate U', artist: 'Snarky Puppy', album: 'Tell Your Friends', photo_url: 'https://images-na.ssl-images-amazon.com/images/I/41wgoZHEzjL.jpg')
Song.create(title: 'High Living', artist: 'Toro Y Moi', album: 'Anything in Return', photo_url: 'http://cdn2.pitchfork.com/albums/18710/fbafae2f.jpg')
Song.create(title: 'Daylight', artist: 'Thundercat', album: 'The Golden Age of Apocalypse', photo_url: 'http://cdn3.pitchfork.com/albums/16885/1359c2d2.jpg')
Song.create(title: 'Find You', artist: 'Robert Glasper', album: 'ArtScience', photo_url: 'http://cdn.pitchfork.com/albums/23715/8d4de4c8.jpg')