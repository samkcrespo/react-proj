class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  has_many :budgets
  has_many :expenses, through: :budgets
  has_many :cashflows, through: :budgets
end
