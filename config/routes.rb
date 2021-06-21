Rails.application.routes.draw do
  
  resources :clothings, only: [:destroy]
  # resources :swap_clothings
  # resources :swap_users
  resources :swaps, only: [:index]
  resources :users, only: [:create]
  # resources :usernames

  post '/login', to: 'users#login'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
