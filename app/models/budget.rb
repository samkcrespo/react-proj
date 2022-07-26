class Budget < ApplicationRecord
  belongs_to :user
  has_many :expenses
  has_many :cashflows

  def sum
    self.expenses.pluck(:amount).sum
  end

  def total_balance
    self.cashflows.pluck(:amount).sum - self.expenses.pluck(:amount).sum
  end
end
