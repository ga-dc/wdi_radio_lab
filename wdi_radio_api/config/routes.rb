Rails.application.routes.draw do
  get 'songs/index' => 'songs#index'

  get 'songs/show' => 'songs#show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
