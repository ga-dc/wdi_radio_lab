class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :album
      t.string :img_url
      t.string :artist
      t.string :genre
      t.timestamps
    end
  end
end
