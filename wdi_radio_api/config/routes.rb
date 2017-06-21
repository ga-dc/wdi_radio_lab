Rails.application.routes.draw do
  get 'wdiradio/index'

  root 'wdiradio#index'
  resources :songs

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
