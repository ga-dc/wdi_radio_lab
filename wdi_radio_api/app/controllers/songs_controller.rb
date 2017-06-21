class SongsController < ApplicationController

	def index
		@songs = Song.all
		# respond_to do |format|
		# 	format.json{ render json: @songs,status: :ok }
		# 	format.html{ render :index}
		# end
		render json: @songs.to_json, status: :ok
	end
	# def show
	# 	@song = Song.find()
	# end
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