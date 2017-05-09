Rails.application.routes.draw do
  root "songs#index"
  resources :songs, only: [:index, :show]
end
