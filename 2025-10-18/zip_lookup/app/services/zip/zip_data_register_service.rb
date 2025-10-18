require "csv"

#
# アプリケーションで使う郵便番号と住所のデータを登録するサービス
#
module Zip
  class ZipDataRegisterService
    CSV_FILE_NAME = "ken_all.csv".freeze
    DEFAULT_CSV_PATH = ZipExtractor::EXTRACTED_FILE_DIR.join(CSV_FILE_NAME)

    def self.call(**args)
      new(**args).call
    end

    def initialize(csv_path: DEFAULT_CSV_PATH)
      @csv_path = csv_path
    end

    def call
      parsed_data = parse_csv(@csv_path)
      ZipCode.bulk_insert(parsed_data)
    rescue => e
      Rails.logger.error("Zip data register failed: #{e.message}")
      raise
    end

    private

    def parse_csv(file_path)
      raise ArgumentError, "CSV file not found: #{file_path}" unless File.exist?(file_path)

      parsed_data = []
      # https://www.post.japanpost.jp/zipcode/dl/utf-readme.html の仕様に基づく
      CSV.foreach(file_path, encoding: "UTF-8") do |row|
        parsed_data << {
          zipcode: row[2].to_i,
          pref: row[6],
          city: row[7],
          town: blank_to_nil(row[8]),
          pref_kana: row[3],
          city_kana: row[4],
          town_kana: blank_to_nil(row[5])
        }
      end
      parsed_data
    end

    def blank_to_nil(value)
      value.presence
    end
  end
end
