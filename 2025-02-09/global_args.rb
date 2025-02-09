
# $0から$100まで定義があったら出力する
text = '2025-02-09'
text =~ /(\d{4})-(\d{2})-(\d{2})/
(0..100).to_a.each do |i|
  # $0は実行時のファイル名。$1以降は、正規表現でマッチしたグループの値が入る
  val = "$#{i}"
  puts "$#{i}: #{eval(val)}" if global_variables.include?(val.to_sym)
end

