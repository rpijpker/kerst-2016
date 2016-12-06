class LightsController < ApplicationController
  def index
  end

  def christmas
    WebSocket::Client::Simple.connect 'http://d3a79446.ngrok.io'
  end
end
