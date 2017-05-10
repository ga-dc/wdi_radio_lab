# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.destroy_all
Artist.destroy_all

Artist.create(name:'Bruno Mars', song:'That\'s What I Like', img_url:'http://www.brunomars.com//sites/g/files/g2000006216/f/201611/BrunoMars_Site_NewSite_Assets_FBOG.jpg'),
Artist.create(name:'The Chainsmokers & Coldplay',song:'Something Just Like this',img_url:'https://images.genius.com/f9d1140764b8ff39d8738fbb83dd4a0e.760x400x1.jpg'),
Artist.create(name:'Ed Sheeran',song:'Shape of You',img_url:'https://images.genius.com/b987a0d3e07d6f10d3c434bfb69a651f.1000x1000x1.jpg'),
Artist.create(name:'Kygo x Selena Gomez',song:'It Ain\'t Me',img_url:'https://media.toofab.com/2017/02/16/0216-selena-inset-810x610.jpg'),
Artist.create(name:'Zedd & Alessia Cara',song:'Stay',img_url:'https://i.ytimg.com/vi/UaFcE9PeLcQ/hqdefault.jpg'),
Artist.create(name:'Clean Bandit Featuring Sean Paul & Anne-Marie',song:'Rockabye',img_url:'https://images.shazam.com/coverart/t332438269-b1164046335_s400.jpg'),
Artist.create(name:'James Arthur',song:'Say You Won\'t Let Go',img_url:'http://thehofstrachronicle.com/wp-content/uploads/2016/11/james-arthur.jpg'),
Artist.create(name:'Julia Michaels',song:'Issues',img_url:'https://pbs.twimg.com/profile_images/817406490210222081/d5G4MOIX.jpg'),
Artist.create(name:'The Chainsmokers',song:'Paris',img_url:'https://www.cprato.com/data/res/images/albums/293.jpg'),
Artist.create(name:'Maroon 5 Featuring Future',song:'Cold',img_url:'https://images.genius.com/9426ffa300a18b4b1da7f72ca0c28eb2.1000x1000x1.jpg')
