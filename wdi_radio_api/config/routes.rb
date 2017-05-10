Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :songs, except: [:new, :edit] do
      resources :comments, except: [:new, :edit]
end
  root to: redirect('/songs.json')
end
