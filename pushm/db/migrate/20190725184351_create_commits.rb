class CreateCommits < ActiveRecord::Migration[5.2]
  def change
    create_table :commits do |t|
      # t.integer :author_id
      t.references :author
      t.string :message
      t.string :branch_name
      t.timestamps
    end
  end
end
