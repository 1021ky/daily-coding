
require 'Date'

def run
  # Date https://docs.ruby-lang.org/ja/latest/class/Date.html#I_NEXT
  # 日付指定してオブジェクトを作るときはコンストラクタで指定
  current = Date.new(2024, 12, 11)
  after = current.next_day(28)
  p after
  # 当日であればクラスメソッドで
  today = Date.today
  p today
end

if __FILE__ == $0
  run
end