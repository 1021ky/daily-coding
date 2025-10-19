# == Schema Information
#
# Table name: zip_codes
#
#  id         :integer          not null, primary key
#  zipcode    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_zip_codes_on_zipcode  (zipcode) UNIQUE
#
class ZipCode < ApplicationRecord
  has_one :zip_code_address, dependent: :destroy
  has_one :zip_code_address_furigana, dependent: :destroy

  #
  # 郵便番号と住所のデータを一括登録する
  #
  # 既存のデータは全て削除してから登録する
  #
  # @param [Array<Hash>] data 郵便番号と住所・ふりがなの配列
  # @return [Boolean]
  #
  def self.bulk_insert(data)
    return true if data.blank?

    transaction do
      ZipCodeAddressFurigana.delete_all
      ZipCodeAddress.delete_all
      delete_all

      timestamp = Time.current
      unique_zipcodes = data.map { |entry| entry[:zipcode] }.uniq

      zip_records = unique_zipcodes.map do |zipcode|
        {
          zipcode: zipcode,
          created_at: timestamp,
          updated_at: timestamp
        }
      end
      insert_all!(zip_records)

      zipcode_to_id = ZipCode.where(zipcode: unique_zipcodes).pluck(:zipcode, :id).to_h

      address_records = data.map do |entry|
        {
          zip_code_id: zipcode_to_id.fetch(entry[:zipcode]),
          pref: entry[:pref],
          city: entry[:city],
          town: entry[:town],
          created_at: timestamp,
          updated_at: timestamp
        }
      end
      ZipCodeAddress.insert_all!(address_records) if address_records.any?

      furigana_records = data.map do |entry|
        {
          zip_code_id: zipcode_to_id.fetch(entry[:zipcode]),
          pref: entry[:pref_kana],
          city: entry[:city_kana],
          town: entry[:town_kana],
          created_at: timestamp,
          updated_at: timestamp
        }
      end
      ZipCodeAddressFurigana.insert_all!(furigana_records) if furigana_records.any?
    end

    true
  rescue => e
    Rails.logger.error("ZipCode bulk insert failed: #{e.message}")
    raise ActiveRecord::Rollback
  ensure
    false
  end
end
