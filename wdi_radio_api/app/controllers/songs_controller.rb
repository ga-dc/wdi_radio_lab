class SongsController < ApplicationController
  def index
    @songs = Song.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @songs }
    end
  end

  def show
    @song = Song.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @song }
    end
  end


end
