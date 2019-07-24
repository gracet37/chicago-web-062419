class CreateDonuts < ActiveRecord::Migration[5.2]
  def change
    create_table :donuts do |t|
      t.string :flavor
      t.integer :price
      t.boolean :sprinkles

      t.timestamps
    end
  end
end
