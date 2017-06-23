# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.destroy_all

Ailee = Song.create(title: 'Heaven', artist: 'Ailee', genre: 'R&B', photo_url: 'https://colorcodedlyrics.com/wp-content/uploads/2012/06/ailee-heaven.jpg')
dumbfounded = Song.create(title: 'Are We There Yet?', artist: 'dumbfounded', genre: 'Rap', photo_url: 'http://thefader-res.cloudinary.com/images/w_760,c_limit,f_auto,q_auto:best/3_lrk2lc/dumbfoundead-rapper-asian-american-representation.jpg')
heartbreaka = Song.create(title: 'Heaven Or Hell Remix', artist: 'Heartbreaka', genre: 'Rap', photo_url: 'https://res.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,h_630,w_1200/v1475004199/event-6474827.jpg')
jreyez = Song.create(title: 'Here For The Night', artist: 'J.Reyez', genre: 'Rap/R&B', photo_url: 'https://i.ytimg.com/vi/XxSMyN3gtTQ/maxresdefault.jpg')
jackie = Song.create(title: 'Parked Outside', artist: 'Jackie Chain', genre: 'Rap', photo_url: 'https://images.vice.com/noisey/content-images/article/jackie-chains-blaze-of-glory-once-again/jackie-thumb.jpg?crop=0.9304964539007092xw:1xh;center,center&resize=1050:*')
pryde = Song.create(title: 'Low Key', artist: 'Pryde', genre: 'Rap/Hip-Hop', photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Plan_A_Merchandise_Promotion.png/220px-Plan_A_Merchandise_Promotion.png')