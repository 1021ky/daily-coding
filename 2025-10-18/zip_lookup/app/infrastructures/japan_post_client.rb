require 'faraday'
require 'zip'
require 'stringio'

#
# 日本郵便から公開されているデータを取得するクライアント
#
class JapanPostClient

  def fetch_zip_data
    conn = Faraday.new
    begin
      response = conn.get(self.URL)
      unless response.success?
        raise "Failed to fetch data: #{response.status}"
      end
    rescue => e
      Rails.logger.error("HTTP request failed: #{e.message}")
      raise
    end

    response.body
  end

  private

  def URL
    'https://www.post.japanpost.jp/zipcode/dl/utf/zip/utf_ken_all.zip'.freeze
  end
end