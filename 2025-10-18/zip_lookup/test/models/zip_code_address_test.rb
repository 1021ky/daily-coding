# == Schema Information
#
# Table name: zip_code_addresses
#
#  id          :integer          not null, primary key
#  city        :string(64)       not null
#  pref        :string(64)       not null
#  town        :string(256)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  zip_code_id :integer          not null
#
# Indexes
#
#  index_zip_code_addresses_on_zip_code_id  (zip_code_id)
#
# Foreign Keys
#
#  zip_code_id  (zip_code_id => zip_codes.id)
#
require "test_helper"

class ZipCodeAddressTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
