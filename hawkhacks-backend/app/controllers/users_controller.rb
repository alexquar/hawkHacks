class UsersController < ApplicationController

  def sign_up
    @user = User.create!(email: params[:email], pass: params[:pass], first_name: params[:first_name], last_name: params[:last_name])
    render "users/show", status: :created
  end

  def sign_in
    @user = User.find_by!(email: params[:email])
    puts params
    puts @user.inspect
    if params[:pass] == @user.pass
      render "users/show"
    else
      head :unprocessable_entity
    end
  end
end