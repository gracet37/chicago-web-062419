class UsersController < ApplicationController
  # include Helpers

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.valid?
      @user.save
      session[:user_id] = @user.id
      redirect_to @user
    else
      errors = @user.errors.full_messages
      flash[:errors] = errors
      redirect_to new_user_path
    end
  end

  def show
    redirect_to login_path and return if !logged_in?

    if current_user.id != params[:id].to_i
      redirect_to current_user
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
