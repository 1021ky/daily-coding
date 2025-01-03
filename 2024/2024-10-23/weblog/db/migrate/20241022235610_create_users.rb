class CreateUsers < ActiveRecord::Migration[7.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password
      t.boolean :is_enbaled

      t.timestamps
    end
  end
end
