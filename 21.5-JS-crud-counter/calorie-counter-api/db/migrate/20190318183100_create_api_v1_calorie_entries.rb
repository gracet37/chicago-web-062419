class CreateApiV1CalorieEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :api_v1_calorie_entries do |t|
      t.float :calorie
      t.string :note

      t.timestamps
    end
  end
end
