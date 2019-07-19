Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/pets/:id', to: 'pets#show', as: 'pet'
  resources :pets, except: [:destroy]


  get '/about', to: 'application#about', as: 'about'
end
