class ZipDataRegisterJob < ApplicationJob
  queue_as :zip

  def perform(*args)
    Zip::ZipDataRegisterService.call
  end
end
