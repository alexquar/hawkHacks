class UsersController < ApplicationController

  def sign_up
    @user = User.create!(email: params[:email], password: params[:pass], first_name: params[:first_name], last_name: params[:last_name])
    render "users/show", status: :created
  end

  def sign_in
    @user = User.find_by!(email: params[:email])
    if params[:password] == @user.password
      render "users/show"
    else
      head :not_found
    end
  end
end