require 'bcrypt'

users = []
5.times.each do |i|
  user = User.create!(email_address: "testuser${i}@foofoo.com")
  user.save!
  users << user
end

users.each do |user|
  auth = UserAuthentication.create!(user: user, password: BCrypt::Password.create("123456789${i}"))
  auth.save!
end

users.each do |user|
  attr = UserDisplayAttribute.create!(user: user, icon_path: "testicon${i}.jpg", name: "dispname${i}")
  attr.save!
end