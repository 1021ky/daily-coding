class CreateEntries < ActiveRecord::Migration[7.2]
  def change
    create_table :entries do |t|
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end