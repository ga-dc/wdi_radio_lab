class SongController < ApplicationController

	def index
		@song = Song.all
		    
		    respond_to do |format|
      			format.html { render :index }
      				format.json { render json: @song }
    	end
	end

	def show

	end

	def new
	end

	def edit
	end

	def update
	end

	def destroy
	end
end
