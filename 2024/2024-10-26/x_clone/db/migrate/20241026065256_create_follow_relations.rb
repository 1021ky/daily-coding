class CreateFollowRelations < ActiveRecord::Migration[7.2]
  def change
    create_table :follow_relations do |t|
      t.references :followee, null: false, foreign_key: { to_table: :user }
      t.references :follower, null: false, foreign_key: { to_table: :user }
      t.boolean :is_deleted

      t.timestamps
    end
  end
end
