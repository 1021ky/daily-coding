class CreateUsers < ActiveRecord::Migration[7.2]
  def change
    create_table :users do |t|
      t.string :username, limit: 30
      t.string :password_digest

      t.timestamps
    end
  end
end
