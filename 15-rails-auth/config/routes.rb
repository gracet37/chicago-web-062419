Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :show, :create]
  get '/login', to: 'sessions#new', as: 'login'
  post '/login', to: 'sessions#create'
  get '/secretapology', to: 'sessions#absolve', as: 'absolve'
  delete '/logout', to: 'sessions#destroy', as: 'logout'
end
