# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
songs = Song.create([
  {
    "title": "Can't Buy Me Love",
    "audio_url": "http://www.wdidc.org/wdi-radio-lab-assets/mp3/The%20Beatles%20-%20Can%27t%20Buy%20Me%20Love.mp3",
    "album_art": "http://www.wdidc.org/wdi-radio-lab-assets/img/cant_buy_me_love.jpeg",
    "artist": "The Beatles",
    "genre": "Rock"
  },
  {
    "title": "Awake",
    "audio_url": "http://www.wdidc.org/wdi-radio-lab-assets/mp3/Tycho%20-%20Awake.mp3",
    "album_art": "http://www.wdidc.org/wdi-radio-lab-assets/img/awake_tycho.png",
    "artist": "Tycho",
    "genre": "Electric"
  },
  {
    "title": "Wavves",
    "audio_url": "http://www.wdidc.org/wdi-radio-lab-assets/mp3/Wavves%20-%20Green%20Eyes.mp3",
    "album_art": "http://www.wdidc.org/wdi-radio-lab-assets/img/green_eyes_wavves.jpeg",
    "artist": "Green Eyes",
    "genre": "Electric"
  },
  {
    "title": "King",
    "audio_url": "http://www.wdidc.org/wdi-radio-lab-assets/mp3/King%20-%20J%20Dilla%20%28Jay%20Stay%20Paid%29.mp3",
    "album_art": "http://www.wdidc.org/wdi-radio-lab-assets/img/king_j_dilla.jpeg",
    "artist": "J Dilla",
    "genre": "Hip Hop"
  },
  {
    "title": "Polish Girl",
    "audio_url": "http://www.wdidc.org/wdi-radio-lab-assets/mp3/Neon%20Indian%20-%20Polish%20Girl.mp3",
    "album_art": "http://www.wdidc.org/wdi-radio-lab-assets/img/polish_girl_neon_indian.jpeg",
    "artist": "Neon Indian",
    "genre": "Rock"
  }
])
