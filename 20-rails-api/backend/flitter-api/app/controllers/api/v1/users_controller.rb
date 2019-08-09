class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users, only: [:name], include: :tweets
  end
end
