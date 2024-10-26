class CreateTweets < ActiveRecord::Migration[7.2]
  def change
    create_table :tweets do |t|
      t.references :users, null: false, foreign_key: true
      t.string :body
      t.boolean :is_deleted

      t.timestamps
    end
  end
end
