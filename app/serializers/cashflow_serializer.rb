class CashflowSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount
  has_one :budget
end
