class Songs < ActiveRecord::Migration[5.1]
  def change
  	create_table :songs do |t|
    	# t.references :user
    	t.string :song_title
    	t.string :artist
    	t.string :preview_url
    	t.timestamps
    end
  end
end
