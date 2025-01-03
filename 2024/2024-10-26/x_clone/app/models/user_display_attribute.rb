# == Schema Information
#
# Table name: user_display_attributes
#
#  id         :integer          not null, primary key
#  icon_path  :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  users_id   :integer          not null
#
# Indexes
#
#  index_user_display_attributes_on_users_id  (users_id)
#
# Foreign Keys
#
#  users_id  (users_id => users.id)
#
class UserDisplayAttribute < ApplicationRecord
  belongs_to :user
end
