# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.delete_all

faster = Song.create!(title: "Faster", artist: "Third eye blind", photo_url:"https://upload.wikimedia.org/wikipedia/en/d/da/Third_eye_blind_self_titled.jpg")
background = Song.create!(title: "Background", artist: "Third eye blind", photo_url:"https://upload.wikimedia.org/wikipedia/en/d/da/Third_eye_blind_self_titled.jpg")
narcolepsy = Song.create!(title: "Narcolepsy", artist: "Third eye blind", photo_url:"https://upload.wikimedia.org/wikipedia/en/d/da/Third_eye_blind_self_titled.jpg")
company = Song.create!(title: "Company of Strangers", artist: "Third eye blind", photo_url:"https://upload.wikimedia.org/wikipedia/en/d/da/Third_eye_blind_self_titled.jpg")
mine = Song.create!(title: "Mine", artist: "Third eye blind", photo_url:"https://upload.wikimedia.org/wikipedia/en/d/da/Third_eye_blind_self_titled.jpg")
want = Song.create!(title: "I Want You", artist: "Third eye blind", photo_url:"https://upload.wikimedia.org/wikipedia/en/d/da/Third_eye_blind_self_titled.jpg")
