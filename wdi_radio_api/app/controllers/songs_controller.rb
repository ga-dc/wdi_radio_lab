class SongsController < ApplicationController

  def index
      @songs = Song.all

      render json: @songs

    end

  #   def show
  #     @song = Song.find(params[:id])
  #
  #     respond_to do |format|
  #       format.html { render :show }
  #       format.json { render json: @song }
  #     end
  #   end
  # end
  #
  # private
  # def songss_params
  #     params.require(:song).permit(:title, :artist, :album)
  #   end
end
