Rails.application.routes.draw do
  get '/index', to: 'lights#index'
  post 'lights/on'
  post 'lights/off'
  post 'lights/colorloop'

  post 'lights/play'
  post 'lights/stop'
  post 'lights/clear_queue'
  post 'lights/start_christmas'

  root to: 'lights#index'
end
