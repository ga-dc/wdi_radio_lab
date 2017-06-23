class SongController < ApplicationController

	def index
		@song = Song.all
		    respond_to do |format|
      			format.html { render :index }
      				format.json { render json: @song }
    	end
	end

	def show
		@song = Song.find(params[:id])
	end

	def new
		@song = Song.new
	end

	def edit
	end

	def update
	end

	def destroy
	end

	private

	def artist_params
      params.require(:song).permit(:name, :artist, :genre, :photo_url)
    end
end
