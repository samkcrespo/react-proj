class UsersController < ApplicationController
 
  before_action :find_user, only: [:update, :destroy]
 
  def index
    render json: User.all
  end
 
  def show
    current_user = User.find(session[:current_user])
    render json: current_user
  end
 
  # def show
  #   render json: @user, status: :ok
  # end
 
  def create
    user = User.create!(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end
 
 
  def destroy
    @user.destroy
    head :no_content
  end
 
  def update
    @user.update(user_params)
    render json: @user, status: :accepted
  end
 
  private
 
  def find_user
      @user = User.find(params[:id])
  end
 
  def user_params
      params.permit(:username, :password, :password_confirmation)
  end
 
end
