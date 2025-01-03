class CreateUserAuthentications < ActiveRecord::Migration[7.2]
  def change
    create_table :user_authentications do |t|
      t.references :users, null: false, foreign_key: true
      t.string :hashed_password
      t.string :salt

      t.timestamps
    end
  end
end
