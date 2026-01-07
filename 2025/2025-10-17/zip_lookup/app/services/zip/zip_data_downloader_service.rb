class Zip::ZipDataDownloaderService

  def initialize(client=JapanPostClient.new)
    @client = client
  end

  def call
    @client.fetch_zip_data
  end
end