# https://www.ruby-lang.org/ja/documentation/ruby-from-other-languages/ を見ながら
# メソッド呼び出しは、実はメッセージパッシング

# 演算子で呼び出す
def message_passing_through_operator
  1 + 2
end

# 呼び出し
# +というメソッドが定義されている。実はこれを呼んでいる
# irb(main):003> 1.method :+
# => #<Method: Integer#+(_)>
# irb(main):004>
def message_passing_through_calling_with_brackets
  1.+(2)
end

# 呼び出し
# rubyなので、括弧なしで呼び出せる
def message_passing_through_calling
  1.+ 2
end

# sendメソッド経由で呼び出し
def message_passing_through_send_method
  1.send "+", 2
end

# __send__メソッド経由で呼び出し(動的に呼び出したいものを変えたいときに使える)
def message_passing_through___send___method
  1.__send__ "+", 2
end

if __FILE__ == $0
  # 全部同じ
  p message_passing_through_operator
  p message_passing_through_calling_with_brackets
  p message_passing_through_calling
  p message_passing_through_send_method
  p message_passing_through___send___method
end