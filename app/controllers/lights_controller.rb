class LightsController < ApplicationController
  def index
  end

  def christmas
    ws = WebSocket::Client::Simple.connect 'ws://kerst-server.herokuapp.com:80'
  end
end
