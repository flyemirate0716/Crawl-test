class Api::AuthController < ApplicationController

  skip_before_action :authenticate_request

  def register
    puts user_params
    @user = User.create!(user_params)

    if @user.save
      render(json: @user, status: 200)
    else
      render error: {error: 'Unable to register User.'}, status: 400
    end
  end

  def login
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      render(json: {auth_token: command.result}, status: 200)
    else
      render(json: {error: command.errors}, status: :unauthorized)
    end
  end

  private def user_params
    params.permit(:username, :email, :password)
  end
end
