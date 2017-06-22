class SongsController < ApplicationController

	def index
		@songs = Song.all
		render json: @songs.to_json, status: :ok
	end
	
	def show
		@song = Song.find(params[:id])
		render json: @song.to_json, status: :ok
	end
	def create
		@song = Song.new(song_params)
		if @song.save()
			render json: @song.to_json, status: :created
		else
			render json: @song.errors, status: :unprocessable_entity
		end
	end
	# def new
	# 	@song = Song.new()
	# end
	def update
		@song = Song.find(params[:id])
		@song.update(song_params)
		render json: @song.to_json, status: :ok
	end
	def destroy
		@song = Song.find(params[:id])
		@song.destroy

		render json: {message: "success"}, status: :ok
	end

	private
		def song_params
			params.require(:song).permit(:song_title,:artist,:preview_url)
		end
end