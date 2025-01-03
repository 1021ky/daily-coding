# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_10_26_080345) do
  create_table "follow_relations", force: :cascade do |t|
    t.integer "followee_id", null: false
    t.integer "follower_id", null: false
    t.boolean "is_deleted"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["followee_id"], name: "index_follow_relations_on_followee_id"
    t.index ["follower_id"], name: "index_follow_relations_on_follower_id"
  end

  create_table "tweets", force: :cascade do |t|
    t.integer "users_id", null: false
    t.string "body"
    t.boolean "is_deleted"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["users_id"], name: "index_tweets_on_users_id"
  end

  create_table "user_authentications", force: :cascade do |t|
    t.integer "users_id", null: false
    t.string "hashed_password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.index ["users_id"], name: "index_user_authentications_on_users_id"
  end

  create_table "user_display_attributes", force: :cascade do |t|
    t.integer "users_id", null: false
    t.string "name"
    t.string "icon_path"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["users_id"], name: "index_user_display_attributes_on_users_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email_address"
  end

  add_foreign_key "follow_relations", "user", column: "followee_id"
  add_foreign_key "follow_relations", "user", column: "follower_id"
  add_foreign_key "tweets", "users", column: "users_id"
  add_foreign_key "user_authentications", "users", column: "users_id"
  add_foreign_key "user_display_attributes", "users", column: "users_id"
end
