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

ActiveRecord::Schema.define(version: 2021_06_17_154851) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clothings", force: :cascade do |t|
    t.string "name"
    t.string "color"
    t.string "brand"
    t.integer "size"
    t.string "condition"
    t.string "description"
    t.integer "value"
    t.integer "user_id"
    t.string "image_url"
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "swap_clothings", force: :cascade do |t|
    t.integer "clothing_id"
    t.integer "swap_id"
    t.integer "prev_owner_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "swap_users", force: :cascade do |t|
    t.integer "user_id"
    t.integer "swap_id"
    t.integer "credits"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "swaps", force: :cascade do |t|
    t.datetime "start"
    t.datetime "end"
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "bio"
    t.string "image_url"
    t.string "spirit_color"
    t.boolean "admin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
