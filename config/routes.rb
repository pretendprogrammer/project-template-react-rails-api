Rails.application.routes.draw do
  
  resources :clothings, only: [:destroy, :show, :create, :update]
  patch '/remove_user_ids', to: 'clothings#remove_user_ids'
  post '/get_clothings', to: 'clothings#index_user_clothings'
  # get '/get_clothings', to: 'clothings#index_user_clothings'
  resources :swap_clothings, only: [:create, :destroy]
  resources :swap_users, only: [:create, :update]
  resources :swaps, only: [:index, :show, :create]
  get '/current_swap_users', to: 'swap_users#current_swap_users'
  resources :users, only: [:create, :index, :show]
  # resources :usernames

  post '/login', to: 'users#login'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
