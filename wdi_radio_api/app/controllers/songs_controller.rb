class SongsController < ApplicationController
	def index
		@songs = Song.all

		respond_to do |format|
			format.json {render json: @songs}
		end
	end
	
	def show
		@song = Song.find(params[:id])

		respond_to do |format|
			format.json {render json: @song}
		end
	end

	def create
		@song = Song.create!(song_params)

		respond_to do |format|
			format.json {render json: @song}
		end
	end

	private
	def song_params
		params.require(:song).permit(:title, :artist, :album, :cover_url)
	end
end