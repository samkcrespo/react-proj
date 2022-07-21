class CreateCashflows < ActiveRecord::Migration[6.1]
  def change
    create_table :cashflows do |t|
      t.string :name
      t.float :amount
      t.belongs_to :budget, null: false, foreign_key: true

      t.timestamps
    end
  end
end
