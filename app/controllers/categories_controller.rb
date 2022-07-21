class CategoriesController < ApplicationController

  def index
    render json: Category.all
  end

  def create
    category = Category.create!(params.permit(:name, :icon))
    render json: category, status: :created
  end

end
