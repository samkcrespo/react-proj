class User < ApplicationRecord
  has_secure_password
  has_many :budgets
  has_many :expenses, through: :budgets
  has_many :cashflows, through: :budgets
end
