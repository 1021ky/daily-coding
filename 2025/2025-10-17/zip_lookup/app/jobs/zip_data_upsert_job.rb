class ZipDataUpsertJob < ApplicationJob
  queue_as :zip

  def perform(*args)
    # Do something later
  end
end
