class UsersController < ApplicationController

  def edit
  end
  
  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      reder :edit
    end
  end

  private

  def user_params
    palams.require(:user).permit(:name, :email)
  end
end
