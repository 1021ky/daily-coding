class CreateZipCodeAddressFuriganas < ActiveRecord::Migration[7.2]
  def change
    create_table :zip_code_address_furiganas do |t|
      t.string :pref, limit: 64, null: false, comment: '都道府県ふりがな'
      t.string :city, limit: 64, null: false, comment: '市区町村ふりがな'
      t.string :town, limit: 256, null: true, comment: '町域ふりがな' # 町域は存在しない時があるためnull許容
      t.references :zip_code, null: false, foreign_key: true

      t.timestamps
    end
  end
end
