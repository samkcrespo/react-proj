class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :user
  has_many :expenses
  has_many :cashflows
end
