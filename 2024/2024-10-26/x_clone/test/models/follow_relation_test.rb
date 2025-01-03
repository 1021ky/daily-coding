# == Schema Information
#
# Table name: follow_relations
#
#  id          :integer          not null, primary key
#  is_deleted  :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  followee_id :integer          not null
#  follower_id :integer          not null
#
# Indexes
#
#  index_follow_relations_on_followee_id  (followee_id)
#  index_follow_relations_on_follower_id  (follower_id)
#
# Foreign Keys
#
#  followee_id  (followee_id => user.id)
#  follower_id  (follower_id => user.id)
#
require "test_helper"

class FollowRelationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
