# == Schema Information
#
# Table name: zip_codes
#
#  id         :integer          not null, primary key
#  zipcode    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_zip_codes_on_zipcode  (zipcode) UNIQUE
#
require "test_helper"

class ZipCodeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
