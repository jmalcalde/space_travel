class RegistrationsController < ApplicationController

	def update
		new_params = params.require(:user).permit(:email,
			:name, :current_password, :password,
			:password_confirmation, :first_name, :last_name, :company)
		@user = User.find(current_user.id)
		if @user.update_with_password(new_params)
			set_flash_message :notice, :updated
			sign_in @user, :bypass => true
			redirect_to after_update_path_for(@user)
		else
			render "edit"
		end 
	end

	def destroy
		@user = User.find(current_user.id)
		@user.is_active = 0
		if @user.save
			sign_out @user
			redirect_to root_path
		else
			render "edit"
		end
	end
end
