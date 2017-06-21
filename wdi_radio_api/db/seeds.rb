# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.destroy_all

songs = Song.create!([
  {album: "Moana Sountrack", title: "Tulou Tagaloa", photo_url: "https://lumiere-a.akamaihd.net/v1/images/p_moana_digitalhd_b1af905c.png?region=0%2C0%2C400%2C400"},
  {album: "Moana Sountrack", title: "An Innocent Warrior", photo_url: "https://lumiere-a.akamaihd.net/v1/images/p_moana_digitalhd_b1af905c.png?region=0%2C0%2C400%2C400"},
  {album: "Moana Sountrack", title: "Where You Are", photo_url: "https://lumiere-a.akamaihd.net/v1/images/p_moana_digitalhd_b1af905c.png?region=0%2C0%2C400%2C400"},
  {album: "Moana Sountrack", title: "How Far I'll go", photo_url: "https://lumiere-a.akamaihd.net/v1/images/p_moana_digitalhd_b1af905c.png?region=0%2C0%2C400%2C400"},
  {album: "Moana Sountrack", title: "We Know The Way", photo_url: "https://lumiere-a.akamaihd.net/v1/images/p_moana_digitalhd_b1af905c.png?region=0%2C0%2C400%2C400"},
  {album: "Moana Sountrack", title: "You're Welcom", photo_url: "https://lumiere-a.akamaihd.net/v1/images/p_moana_digitalhd_b1af905c.png?region=0%2C0%2C400%2C400"},
  {album: "Moana Sountrack", title: "Shiny", photo_url: "https://lumiere-a.akamaihd.net/v1/images/p_moana_digitalhd_b1af905c.png?region=0%2C0%2C400%2C400"},
  {album: "Moana Sountrack", title: "Logo Te Pate", photo_url: "https://lumiere-a.akamaihd.net/v1/images/p_moana_digitalhd_b1af905c.png?region=0%2C0%2C400%2C400"},
  {album: "Moana Sountrack", title: "Know Who You Are", photo_url: "https://lumiere-a.akamaihd.net/v1/images/p_moana_digitalhd_b1af905c.png?region=0%2C0%2C400%2C400"},
  {album: "The Little Mermaid", title: "Part of Your World", photo_url: "https://lumiere-a.akamaihd.net/v1/images/uk_thelittlemermaid_pt_digital_089e45dc.png?region=0%2C0%2C450%2C450"},
  {album: "The Little Mermaid", title: "Kiss The Girl", photo_url: "https://lumiere-a.akamaihd.net/v1/images/uk_thelittlemermaid_pt_digital_089e45dc.png?region=0%2C0%2C450%2C450"},
  {album: "The Little Mermaid", title: "Under The Sea", photo_url: "https://lumiere-a.akamaihd.net/v1/images/uk_thelittlemermaid_pt_digital_089e45dc.png?region=0%2C0%2C450%2C450"},
  {album: "The Little Mermaid", title: "Poor Unfortunate Souls", photo_url: "https://lumiere-a.akamaihd.net/v1/images/uk_thelittlemermaid_pt_digital_089e45dc.png?region=0%2C0%2C450%2C450"},
  {album: "The Little Mermaid", title: "Hot, Hot, Hot", photo_url: "https://lumiere-a.akamaihd.net/v1/images/uk_thelittlemermaid_pt_digital_089e45dc.png?region=0%2C0%2C450%2C450"},
  {album: "Mulan", title: "I'll Make a Man Out of You", photo_url: "https://images-na.ssl-images-amazon.com/images/I/515QQKeD95L._SY445_.jpg"},
  {album: "Mulan", title: "Reflection", photo_url: "https://images-na.ssl-images-amazon.com/images/I/515QQKeD95L._SY445_.jpg"},
  {album: "Mulan", title: "Honor to Us All", photo_url: "https://images-na.ssl-images-amazon.com/images/I/515QQKeD95L._SY445_.jpg"},
  {album: "Mulan", title: "True to Your Heart", photo_url: "https://images-na.ssl-images-amazon.com/images/I/515QQKeD95L._SY445_.jpg"},
  {album: "Mulan", title: "A Girl Worth Fighting For", photo_url: "https://images-na.ssl-images-amazon.com/images/I/515QQKeD95L._SY445_.jpg"}
])

# p "Created #{Song.count} entries"
