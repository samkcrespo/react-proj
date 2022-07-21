class BudgetsController < ApplicationController
  def index
    render json: Budget.all
  end

  def show
    render json: @budget, status: :ok
  end

  def create
    budget = Budget.create!(budget_params)
    render json: budget, status: :created
  end

  def update
    @budget.update!(budget_params)
    render json: @budget, status: :accepted
  end

  def destroy
    @budget.destroy
    head :no_content

  end

  private

  def find_budget
    @budget = Budget.find(params[:id])
  end

  def budget_params
    params.permit(:name, :user_id)
  end
end