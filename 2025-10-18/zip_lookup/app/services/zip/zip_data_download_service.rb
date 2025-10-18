require 'faraday'
require 'zip'
require 'stringio'

#
# 郵便番号と住所ののデータを取得するサービス
#
class Zip::ZipDataDownloadService

  CSV_FILE_NAME = 'ken_all.csv'.freeze

  def initialize(client: JapanPostClient.new)
    @client = client
  end

  def call
    data = @client.fetch_zip_data
    ZipExtractor.extract_csv(data, write_file_name: CSV_FILE_NAME)
  rescue => e
    Rails.logger.error("Zip data download failed: #{e.message}")
    raise
  end
end