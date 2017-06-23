class SongsController < ApplicationController
  def index
    @songs = Song.all
    render json: @songs

    # respond_to do |format|
    #   format.html { render :index }
    #   format.json { render json: @songs}
    # end

  end

  def show
    @song = Song.find(params[:id])
    render json: @song
  end
end
