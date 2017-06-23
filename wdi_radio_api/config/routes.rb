Rails.application.routes.draw do
  get 'songs/index'

  resources :songs

  match '*any' => 'application#options', :via => [:options]


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
