Rails.application.routes.draw do
  get 'registrations/update'

  devise_for :users
  
  get 'home/index'

  root to: 'home#index'  
end
