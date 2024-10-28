# == Schema Information
#
# Table name: tweets
#
#  id         :integer          not null, primary key
#  body       :string
#  is_deleted :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  users_id   :integer          not null
#
# Indexes
#
#  index_tweets_on_users_id  (users_id)
#
# Foreign Keys
#
#  users_id  (users_id => users.id)
#
require "test_helper"

class TweetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
