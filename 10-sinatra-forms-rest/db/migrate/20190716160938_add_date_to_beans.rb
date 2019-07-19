class AddDateToBeans < ActiveRecord::Migration
  def change
    add_column :beans, :date, :string
  end
end
