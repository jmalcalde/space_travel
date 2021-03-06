class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :configure_permitted_parameters, if: :devise_controller?

  def after_sign_in_path_for(resource)
  	session[:previous_url] || missioncontrol_index_path
  end
  
  #these codes are written inside configure_permitted_parameters function
  protected
  def configure_permitted_parameters
   devise_parameter_sanitizer.for(:sign_in) {|u| u.permit(:email)}
   devise_parameter_sanitizer.for(:sign_up) {|u| u.permit(:email, :name, :password, :password_confirmation)}
 end
end
