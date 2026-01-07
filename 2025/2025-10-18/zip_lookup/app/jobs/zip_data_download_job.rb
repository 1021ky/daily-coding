class ZipDataDownloadJob < ApplicationJob
  queue_as :zip

  def perform(*args)
    Zip::ZipDataDownloadService.new.call
  end
end
