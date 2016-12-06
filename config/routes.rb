Rails.application.routes.draw do
  get '/index', to: 'lights#index'
  post 'lights/christmas'

  root to: 'lights#index'
end
