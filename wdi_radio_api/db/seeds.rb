# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.destroy_all

money = Song.create(title:'Money',artist:'Pink Floyd',album:'Dark Side of the Moon', album_art:'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png')
wishyouwerehere = Song.create(title:'Wish You Were Here',artist:'Pink Floyd',album:'Wish You Were Here', album_art:'https://upload.wikimedia.org/wikipedia/en/a/a4/Pink_Floyd%2C_Wish_You_Were_Here_%281975%29.png')
dogs = Song.create(title:'Dogs',artist:'Pink Floyd',album:'Animals', album_art:'https://upload.wikimedia.org/wikipedia/en/7/74/Pink_Floyd-Animals-Frontal.jpg')
comfortablynumb = Song.create(title:'Comfortably Numb',artist:'Pink Floyd',album:'The Wall', album_art:'http://wordsushi.com/wp-content/uploads/2012/11/The+Wall++high+resolution+png.png')
oneofthesedays = Song.create(title:'One Of These Days',artist:'Pink Floyd',album:'Meddle', album_art:'https://upload.wikimedia.org/wikipedia/en/d/d4/MeddleCover.jpeg')
