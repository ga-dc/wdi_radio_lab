# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.destroy_all

unstoppable = Song.create(title:"Unstoppable", album:"Unstoppable", artist:"The Score", photo_url:"http://www.thescoremusic.com/wp-content/themes/thescoreofficial_thescoreofficial/dist/images/unstoppable-EPart-final.jpg")
revolution = Song.create(title:"Revolution", album: "Legend", artist:"The Score", photo_url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRRVfYWOJpXBykwzriHvgZASqWLtfAnBXo7Pc4Q5aO_MDgnrlP")
guillotine = Song.create(title:"Guillotine", album:"The Human Condition", artist:"Jon Bellion", photo_url:"https://everythingmainstream.files.wordpress.com/2017/01/jb1.jpg")
all_time_low = Song.create(title:"All Time Low", album:"The Human Condition", artist:"Jon Bellion", photo_url:"https://everythingmainstream.files.wordpress.com/2017/01/jb1.jpg")
