class SongsController < ApplicationController
  def index
    @songs = Songs.all.order(:created_at)

    respond_to do |format|
      format.json { render json: @songs }
    end
  end
end
