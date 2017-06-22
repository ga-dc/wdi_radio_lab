class SongsController < ApplicationController

	def index
		@songs = Song.all
		render json: @songs.to_json, status: :ok
	end
	
	def show
		@song = Song.find(params[:id])
		render json: @song.to_json, status: :ok
	end
	# def create
	# 	@song = Song.new()
	# end
	# def new
	# 	@song = Song.new()
	# end
	# def update
	# 	@song = Song.find()
	# end
	# def destroy
	# 	@song = Song.find()
	# end

	# private
	# 	def song_params
	# 		params.require(:song).permit(:song_title,:artist,:preview_url)
	# 	end
end