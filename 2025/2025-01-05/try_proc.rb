def greet(&block) # &をつけると引数にブロックを渡せる
  puts 'good morning'
  puts block.call('hello') unless block.nil?
  if block_given? # unless block.nil?と同じ
    text = yield 'hi'
    puts text
  end
  puts 'good evening'
end

# blockを渡す
greet do |text|
  text * 2
end

# blockを渡さなかったらnil扱い
greet