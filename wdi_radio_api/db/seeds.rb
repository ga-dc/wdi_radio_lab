# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.destroy_all

hall_oates = Song.create!(
  title: "Private Eyes",
  album: "Private Eyes",
  preview_url: "http://i.imgur.com/KqH1REq.jpg"
)

limp_bizkit = Song.create!(
  title: "Break Stuff",
  album: "Significant Other",
  preview_url: "http://i.imgur.com/tCthSI3.jpg"
)

weird_al = Song.create!(
  title: "The Saga Begins",
  album: "Running With Scissors",
  preview_url: "http://i.imgur.com/oRFkm2i.jpg"
)
