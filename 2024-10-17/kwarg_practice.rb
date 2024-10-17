def kwarg_method(first: 0, second: 1)
  # キーワード引数はメソッド内ではコロンなしで参照する
  p "first: #{first}, second: #{second}"
end

if __FILE__ == $PROGRAM_NAME
  p $PROGRAM_NAME
  # キーワード引数実行時はコロンをつけて値を指定する
  kwarg_method(first: 4)
end
