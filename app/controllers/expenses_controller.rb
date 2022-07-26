class ExpensesController < ApplicationController
before_action :find_expense, only: [:show, :update, :destroy]

  def index
    render json: Expense.all
  end

  def show
    render json: @expense
  end

  def create
    # category = Category.find(params[:category_id])
    expense = Expense.create(expense_params)
    render json: expense, status: :created
  end

  def destroy
    @expense.destroy
    head :no_content
  end

   def update
    @expense.update(expense_params)
    render json: @expense, status: :accepted
  end

  private
      def find_expense
          @expense = Expense.find(params[:id])
      end

      def expense_params
        params.permit(:name, :amount, :category_id, :budget_id)
      end
end
