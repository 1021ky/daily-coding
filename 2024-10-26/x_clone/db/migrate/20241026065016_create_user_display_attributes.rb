class CreateUserDisplayAttributes < ActiveRecord::Migration[7.2]
  def change
    create_table :user_display_attributes do |t|
      t.references :users, null: false, foreign_key: true
      t.string :name
      t.string :icon_path

      t.timestamps
    end
  end
end
