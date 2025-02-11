#
# 回文か判定する
#
# @param [String] target 判定対象
#
# @return [Bool] 回分ならばTrue
#
def palindrome? target
  target.downcase!
  cleaned = target.gsub!(/[^\w]/, '')
  target == target.reverse
end