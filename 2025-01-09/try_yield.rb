def try_yield
  puts 'good morning'
  yield
  puts 'good evenning'
  yield # 同じブロックが2回呼ばれる
end

if __FILE__ == $0
  try_yield do puts 'hi' end
  try_yield do puts 'hi' end
end