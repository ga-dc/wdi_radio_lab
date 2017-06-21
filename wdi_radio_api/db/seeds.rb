# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.destroy_all

songs = Song.create([
  {title: "How Far I'll Go"},
  {title: "You're Welcome"},
  {title: "We Know the way"},
  {title: "Shiny"},
  {title: "Where you Are"},
  {title: "I am Moana (Song of the Ancestors)"},
  ])
