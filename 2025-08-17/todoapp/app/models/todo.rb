class Todo < ApplicationRecord
  belongs_to :user

  validates :title, presence: true, length: { maximum: 50 }
  validates :description, length: { maximum: 100 }
  validates :completed, inclusion: { in: [true, false] }
end
