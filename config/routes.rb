Rails.application.routes.draw do
  
  resources :clothings, only: [:destroy, :show, :create, :update]
  post '/get_clothings', to: 'clothings#index_user_clothings'
  # get '/get_clothings', to: 'clothings#index_user_clothings'
  # resources :swap_clothings
  # resources :swap_users
  resources :swaps, only: [:index]
  resources :users, only: [:create, :index, :show]
  # resources :usernames

  post '/login', to: 'users#login'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
