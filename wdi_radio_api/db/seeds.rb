# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.destroy_all

song = Song.create!(song_title:"Wait and Bleed",artist:"Slipknot",preview_url:"http://")
song1 = Song.create!(song_title:"Throne",artist:"Bring Me the Horizon",preview_url:"http://")
song2 = Song.create!(song_title:"Omerta",artist:"Lamb of God",preview_url:"http://")
song3 = Song.create!(song_title:"Big Bad Wolf",artist:"In this Moment",preview_url:"http://")
song4 = Song.create!(song_title:"Turn Down for What",artist:"Upon a Burning Body",preview_url:"http://")