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

ActiveRecord::Schema[7.2].define(version: 2025_10_18_085159) do
  create_table "zip_code_address_furiganas", force: :cascade do |t|
    t.string "pref", limit: 64, null: false
    t.string "city", limit: 64, null: false
    t.string "town", limit: 256
    t.integer "zip_code_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["zip_code_id"], name: "index_zip_code_address_furiganas_on_zip_code_id"
  end

  create_table "zip_code_addresses", force: :cascade do |t|
    t.string "pref", limit: 64, null: false
    t.string "city", limit: 64, null: false
    t.string "town", limit: 256
    t.integer "zip_code_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["zip_code_id"], name: "index_zip_code_addresses_on_zip_code_id"
  end

  create_table "zip_codes", force: :cascade do |t|
    t.integer "zipcode", limit: 7, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["zipcode"], name: "index_zip_codes_on_zipcode", unique: true
  end

  add_foreign_key "zip_code_address_furiganas", "zip_codes"
  add_foreign_key "zip_code_addresses", "zip_codes"
end
