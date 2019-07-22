class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :condition
      t.references :doctor, foreign_key: true

      t.timestamps
    end
  end
end
