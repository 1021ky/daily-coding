# 日本郵便の郵便番号公開データを取得するクライアント
class JapanPostClient
  require 'faraday'
  require 'zip'
  require 'stringio'

  JAPAN_POST_ZIP_URL = 'https://www.post.japanpost.jp/zipcode/dl/utf/zip/utf_ken_all.zip'.freeze

  def fetch_zip_data
    begin
      data = get_zipcode_data
      write_csv_file(data)
    rescue => e
      Rails.logger.error("Failed to fetch zip data: #{e.message}")
      raise
    end
  end

  private

  def get_zipcode_data
    conn = Faraday.new
    begin
      response = conn.get(JAPAN_POST_ZIP_URL)
      unless response.success?
        raise "Failed to fetch data: #{response.status}"
      end
    rescue => e
      Rails.logger.error("HTTP request failed: #{e.message}")
      raise
    end
    response.body
  end

  def write_csv_file(zip_data)
    dir = Rails.root.join('tmp', 'zipdata')
    FileUtils.mkdir_p(dir) unless Dir.exist?(dir)
    begin
      File.open(dir.join('ken_all.csv'), 'wb') do |f|
        f.write(extract_csv_from_zip(zip_data))
      end
    rescue => e
      Rails.logger.error("Failed to write CSV file: #{e.message}")
      raise
    end
  end

  def extract_csv_from_zip(zip_data)
    begin
      csv_content = nil
      Zip::File.open_buffer(zip_data) do |zip|
        entry = zip.glob('**/*ken_all*.csv').first || zip.first
        raise "CSV not found in zip" unless entry
        csv_content = entry.get_input_stream.read
      end
      csv_content
    rescue => e
      Rails.logger.error("Failed to extract CSV from zip: #{e.message}")
      raise
    end
  end
end