# == Schema Information
#
# Table name: user_authentications
#
#  id              :integer          not null, primary key
#  hashed_password :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  users_id        :integer          not null
#
# Indexes
#
#  index_user_authentications_on_users_id  (users_id)
#
# Foreign Keys
#
#  users_id  (users_id => users.id)
#
require "test_helper"

class UserAuthenticationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end