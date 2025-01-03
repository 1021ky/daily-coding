# ■ お題: 文字列の重複単語カウント( copilot に出題をお願いした)

# ① 入力として、スペース区切りの単語が並んだ文字列を受け取る。
# 例: "apple orange banana apple peach peach banana"

# ② その文字列に含まれる単語のうち、重複している単語がいくつあるか数えるメソッドを実装する。

# 出力: 重複する単語の数（例の文字列なら "apple" と "banana" と "peach" の3種類が重複）
# ③ 重複単語の一覧も閲覧できるようにすると便利。

# 出力例: ["apple", "banana", "peach"] と、それらのカウント 3

def q1
  words = gets.chomp.split(' ')
  uniq_words = words.uniq
  uniq_counts = 0
  p uniq_words
  uniq_words.each do |uniq_word|
    uniq_counts += 1 if words.count(uniq_word) >= 2
  end
  uniq_counts
end

def run
  p q1
end

if __FILE__ == $0
  run
end