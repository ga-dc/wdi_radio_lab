# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.destroy_all

yeahyeahyeahs_one = Song.create!(title: "Maps", artist: "yeahyeahyeahs", album: "Fever to Tell", artwork: "http://a3.mzstatic.com/us/r30/Features/d6/ba/99/dj.homcvzwl.60x60-50.jpg", preview_link: "http://a1748.phobos.apple.com/us/r1000/074/Music/d4/97/e7/mzm.bigdtgoz.aac.p.m4a")
yeahyeahyeahs_two = Song.create!(title: "Heads Will Roll", artist: "yeahyeahyeahs", album: "It's Blitz! (Deluxe Edition)", artwork: "http://a1.mzstatic.com/us/r30/Music/4c/30/8c/mzi.gcicgujl.60x60-50.jpg", preview_link: "http://a308.phobos.apple.com/us/r1000/064/Music/9c/a6/3a/mzm.zgjjoqyj.aac.p.m4a")

kendricklamar_one = Song.create!(title: "Chapter Six", artist: "Kendrick Lamar", album: "Section.80", artwork: "http://a1.mzstatic.com/us/r30/Music/b2/11/28/mzi.jjuamuwh.60x60-50.jpg", preview_link: "http://a431.phobos.apple.com/us/r30/Music/46/43/43/mzm.heehgixa.aac.p.m4a")
kendricklamar_two = Song.create!(title: "Ab-Souls Outro (feat. Ab-Soul)", artist: "Kendrick Lamar", album: "Section.80", artwork: "http://a1.mzstatic.com/us/r30/Music/b2/11/28/mzi.jjuamuwh.60x60-50.jpg", preview_link: "http://a273.phobos.apple.com/us/r30/Music/d3/17/d1/mzm.qzrsgtxr.aac.p.m4a")
