class SongsController < ApplicationController

def index
  @songs= Song.all

respond_to do |format|
  format.json { render json: @songs }
end
end




end
