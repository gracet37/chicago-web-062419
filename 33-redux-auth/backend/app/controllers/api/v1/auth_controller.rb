class Api::V1::AuthController < ApplicationController

  def create
    p '=-========================================='
    user = User.new(username: params[:auth][:username], password: params[:auth][:username])
    p user
    if user.save
      token = JWT.encode({id: user.id}, 'app_secret', 'HS256')
      render json: { id: user.id, username: user.username, token: token}
    else
      render json: { error: 'Not Authorized'}, status: 401
    end
  end



  def show
    token = request.headers[:Authorization].split(' ')[1]
    p token
    decoded_token = JWT.decode(token, 'app_secret', true, { algorithm: 'HS256' })

    id = decoded_token.first['id']
    user = User.find(id)
    if user
      render json: { id: user.id, username: user.username, token: token }
    else
      render json: { error: 'Not Authorized'}, status: 401
    end
  end
end

























































  # def create
    # user = User.find_by(username: params[:username])
    # if user && user.authenticate(params[:password])
      # token = JWT.encode({user_id: user.id}, 'secret', 'HS256')
      # render json: { id: user.id, username: user.username, token: token}
    # else
      # render json: { error: 'Not Authorized'}, status: 401
    # end
  # end

  # def show
    # token = request.headers[:Authorization]
    # decoded_token = JWT.decode token, 'secret', true, { algorithm: 'HS256' }
    # user_id = decoded_token.first['user_id']
    # user = User.find(user_id)
    # if user
      # render json: { id: user.id, username: user.username, token: token }
    # else
      # render json: { error: 'Not Authorized'}, status: 401
    # end
  # end
