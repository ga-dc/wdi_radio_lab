# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.destroy_all

Song.create(title: "Skin", artist: "Rag'n'Bone Man", album: "Human", album_url: "https://images.genius.com/4ffb10b43741a6444102b7f05cbf0a3f.500x500x1.jpg")
Song.create(title: "Heatstroke", artist: "Calvin Harris", album: "The Harris Files", album_url: "http://calvinharris.com/wp-content/uploads/2016/03/CALVIN_HARRIS_single_HEATSTROKE_WEB_BK_1920x1080.jpg")
Song.create(title: "Saturnz Barz", artist: "Gorillaz", album: "Humanz", album_url: "http://www.rapwave.net/wp-content/uploads/2017/03/gorillaz-humanz.jpg")
Song.create(title: "Closer", artist: "The Chainsmokers", album: "Memories...Do Not Open", album_url: "https://upload.wikimedia.org/wikipedia/en/5/51/Memories...Do_Not_Open.jpg")
Song.create(title: "Paranoid Android", artist: "Radiohead", album: "Ok Computer", album_url: "http://images.genius.com/fa1b76460de7be466a7ae6b8b7b212b1.1000x1000x1.jpg")
Song.create(title: "Now or Never", artist: "Halsey", album: "Hopeless Fountain Kingdom", album_url: "https://pbs.twimg.com/media/C8RuTmQUQAA2Pum.jpg")
Song.create(title: "Selfish", artist: "Future", album: "HNDRXX", album_url: "http://images.genius.com/a3334b3b040c2c12cf716402693c55af.1000x1000x1.jpg")
Song.create(title: "In Cold Blood", artist: "alt-J", album: "Relaxer", album_url: "http://images.genius.com/5d4263ce992a89ae0579af3eb5b172c6.1000x1000x1.jpg")
