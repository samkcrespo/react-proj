class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount
  has_one :budget
  has_one :category
end
