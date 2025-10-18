require 'faraday'
require 'zip'
require 'stringio'

#
# 郵便番号と住所ののデータを取得するサービス
#
class Zip::ZipDataDownloadService

  def initialize(client: JapanPostClient.new, extractor: ZipdataExtractor.new)
    @client = client
    @extractor = extractor
  end

  def call
    data = @client.fetch_zip_data
    @extractor.extract(data)
  rescue => e
    Rails.logger.error("Zip data download failed: #{e.message}")
    raise
  end
end