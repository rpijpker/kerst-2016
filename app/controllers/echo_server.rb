require 'eventmachine'
require 'websocket-eventmachine-server'
require 'hue'
require 'sonos'

PORT = (ARGV.shift || 8080).to_i

EM::run do
  @channel = EM::Channel.new

  puts "start websocket server - port:#{PORT}"

  WebSocket::EventMachine::Server.start(:host => "0.0.0.0", :port => PORT) do |ws|
    ws.onopen do
      sid = @channel.subscribe do |mes|
        ws.send mes
      end
      puts "<#{sid}> connect"

      @channel.push "hello new client <#{sid}>"

      ws.onmessage do |msg|
        puts "<#{sid}> #{msg}"
        if msg.match(/christmastime/)
          start_christmas
          @channel.push "<#{@client.lights.fetch(1).name}>" + " has been christmasfied"
        end
      end

      ws.onclose do
        puts "<#{sid}> disconnected"
        @channel.unsubscribe sid
        @channel.push "<#{sid}> disconnected"
      end
      def start_christmas
        initialize_variables
        # zodat alex niet boos wordt :(
        @light.brightness = 1

        @time = Time.now
        play
        cycle
      end

      def play
        @speaker.play 'x-sonos-spotify:spotify%3atrack%3a66mB55sZuDHlXt3vAcVkXf?sid=9&amp;flags=0'
        @speaker.volume = 2
        @speaker.play
      end

      def stop
        @speaker.stop
      end

      def cycle
        initialize_variables
        color = [@light.x, @light.y]
        while @speaker.is_playing?
          sleep 2
          turn_red
          sleep 2
          turn_green

          @speaker.stop if Time.now > @time + 11
        end
        @light.set_state(xy: [color[0], color[1]])
      end

      def turn_green
        @light.set_state(xy: [0.05, 0.85])
      end

      def turn_red
        @light.set_state(xy: [0.7, 0.3])
      end

      def initialize_variables
        @client = Hue::Client.new
        @light = @client.lights.fetch(1)
        @transition_time = 5 * 1

        @system = Sonos::System.new
        @speaker = @system.speakers.first
        while @speaker.name != 'Kantine'
          @system = Sonos::System.new
          @speaker = @system.speakers.first
        end
      end
    end
  end

end
