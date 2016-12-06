class LightsController < ApplicationController
  def index
  end

  def christmas
    puts 'hallo'
    WebSocket::Client::Simple.connect 'ws://kerst-server.herokuapp.com:80'
  end
end
