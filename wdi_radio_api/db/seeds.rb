# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.destroy_all

hot = Song.create(title:"Hot to the Touch", artist: "Grace Potter", album: "Midnight"),
alive = Song.create(title: "Alive Tonight", artist: "Grace Potter", album: "Midnight"),
girl = Song.create(title: "Your Girl", artist: "Grace Potter", album: "Midnight"),
empty = Song.create(title: "Empty Heart", artist: "Grace Potter", album: "Midnight"),
miner = Song.create(title: "The Miner", artist: "Grace Potter", album: "Midnight"),
delirious = Song.create(title: "Delirious", artist: "Grace Potter", album: "Midnight"),
become = Song.create(title: "Look what we've Become", artist: "Grace Potter", album: "Midnight"),
instagators = Song.create(title: "Instagators", artist: "Grace Potter", album: "Midnight"),
fan = Song.create(title: "Biggest Fan", artist: "Grace Potter", album: "Midnight"),
low = Song.create(title: "Low", artist: "Grace Potter", album: "Midnight")
