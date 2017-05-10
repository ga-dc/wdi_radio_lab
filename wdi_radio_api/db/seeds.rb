# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.destroy_all

songs1 = Song.create ({title: "Oh No", artist: "Jack & Eliza", album:"Gentle Warnings", photo_url:"https://e.snmc.io/lk/l/a/48dd47e3538df5a84e1ef8a76b8466ad/5977293.jpg"})
songs2 = Song.create ({title: "One Too Far", artist: "Jack & Eliza", album: "Gentle Warnings", photo_url: "https://e.snmc.io/lk/l/a/48dd47e3538df5a84e1ef8a76b8466ad/5977293.jpg" })
songs3 = Song.create ({title: "Closer", artist: "The Chainsmokers", album: "Memories...Do Not Open", photo_url:"https://images.genius.com/76ee093a258cd6f399a63ae5fe154de5.960x960x1.jpg"})
songs4 = Song.create ({title: "Something Just Like This", artist:"The Chainsmokers & Coldplay", photo_url:"http://jonalisblog.com/wp-content/uploads/2017/02/chainsmokers-coldplay-something-like-this-868x680.png"})
songs5 = Song.create ({title: "Virtual Insanity", artist: "Jamiroquai", album:"Travelling Without Moving", photo_url:"https://lastfm-img2.akamaized.net/i/u/300x300/292de04a25ad411da4fbe6b215ba3788.jpg"})
songs6 = Song.create ({title:"Cosmic Girl", artist:"Jamiroquai", album:"Travelling Without Moving", photo_url:"http://fret-buzz.net/wp-content/uploads/2015/09/fc550x550eggplant.u2.jpg"})
songs7 = Song.create ({title:"Gravity Eyelids", artist:"Porcupine Tree", album:"In Absentia", photo_url:"https://img.discogs.com/Ae923SnqKfNvBYUydZXopcnh9dc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-702279-1215061823.jpeg.jpg"})
songs8 = Song.create ({title:"Blackest Eyes", artist:"Porcupine Tree", album:"In Absentia", photo_url:"https://img.discogs.com/Ae923SnqKfNvBYUydZXopcnh9dc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-702279-1215061823.jpeg.jpg"})
