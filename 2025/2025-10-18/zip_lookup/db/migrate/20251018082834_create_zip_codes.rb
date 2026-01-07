class CreateZipCodes < ActiveRecord::Migration[7.2]
  def change
    create_table :zip_codes do |t|
      t.integer :zipcode, limit: 7, comment: '郵便番号(7桁)', null: false

      t.timestamps
    end
    add_index :zip_codes, :zipcode, unique: true
  end
end
