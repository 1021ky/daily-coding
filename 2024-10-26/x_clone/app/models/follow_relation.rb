class FollowRelation < ApplicationRecord
  belongs_to :followee
  belongs_to :follower
end
