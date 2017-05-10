# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.destroy_all

taxi = Song.create(title:"Mr.Taxi", album:"Girls' Generation", artist:"SNSD", photo_url:"http://cfile3.uf.tistory.com/image/187F5E4D4F6369FD357EA6")
bang = Song.create(title:"Bang Bang Bang", album: "Made Series", artist:"Big Bang", photo_url:"http://static.global.mnet.com/data/ucc/000/122/362")
muse = Song.create(title:"Time is Running Out", album:"Absolution", artist:"Muse", photo_url:"https://upload.wikimedia.org/wikipedia/en/4/4c/Muse_tirocd.jpg")
shesgone = Song.create(title:"She's gone", album:"Steelheart", artist:"SteelHeart", photo_url:"https://i.ytimg.com/vi/UBnv9PF_4tU/maxresdefault.jpg")
