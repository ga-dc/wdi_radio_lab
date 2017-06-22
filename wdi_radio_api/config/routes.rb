Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: '/', to: 'songs#index'
  get '/songs', to: 'songs#index'


  resource :songs
end
