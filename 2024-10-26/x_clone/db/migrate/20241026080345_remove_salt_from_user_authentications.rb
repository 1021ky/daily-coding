class RemoveSaltFromUserAuthentications < ActiveRecord::Migration[7.2]
  def change
    remove_column :user_authentications, :salt, :string
  end
end
