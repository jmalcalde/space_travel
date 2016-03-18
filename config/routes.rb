Rails.application.routes.draw do
  
  get 'missioncontrol/index'

  devise_for :users
  
  root to: 'home#index'  

  get 'registrations/update'

end
