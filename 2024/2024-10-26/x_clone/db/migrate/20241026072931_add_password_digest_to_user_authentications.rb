class AddPasswordDigestToUserAuthentications < ActiveRecord::Migration[7.2]
  def change
    add_column :user_authentications, :password_digest, :string
  end
end
