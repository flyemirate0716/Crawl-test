Rails.application.routes.draw do

  namespace :api do
    post '/auth/login', to: 'auth#login'
    post '/auth/register', to: 'auth#register'
  end
end