class CashflowsController < ApplicationController
  before_action :find_cashflow, only: [:show, :update, :destroy]

  def index
    render json: Cashflow.all
  end

  def show
    render json: @cashflow
  end

  def create
    @budget = Budget.find(params[:budget_id])
    cashflow = @budget.cashflows.create(cashflow_params)
    render json: cashflow, status: :created
  end

  def destroy
    @cashflow.destroy
    head :no_content
  end

   def update
    @cashflow.update(cashflow_params)
    render json: @cashflow, status: :accepted
  end

  private
      def find_cashflow
          @cashflow = Cashflow.find(params[:id])
      end

      def cashflow_params
        params.permit(:name, :amount, :budget_id)
      end
end
