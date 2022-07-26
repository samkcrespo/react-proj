class AddProfilepicToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :profilepic, :string
  end
end
