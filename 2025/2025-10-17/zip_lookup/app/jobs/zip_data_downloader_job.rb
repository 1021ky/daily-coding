class ZipDataDownloaderJob < ApplicationJob
  queue_as :zip

  def perform(*args)
    begin
      Zip::ZipDataDownloaderService.new.call
    rescue => e
      Rails.logger.error("Failed to download zip data: #{e.message}")
    end
    ZipDataUpsertJob.perform_later
  end
end
