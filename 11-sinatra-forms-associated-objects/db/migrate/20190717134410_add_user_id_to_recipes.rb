class AddUserIdToRecipes < ActiveRecord::Migration
  def change
    add_column :recipes, :user_id, :integerr
  end
end
