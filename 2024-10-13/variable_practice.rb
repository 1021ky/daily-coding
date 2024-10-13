# https://www.ruby-lang.org/ja/documentation/ruby-from-other-languages/ をみつつ練習
# 変数について

# $はじまりは、グローバル変数
$gurobal = :global

class Hoge
  # @@はじまりはクラス変数
  @@hoge = :class_val
  def initialize(val)
    # @はじまりはインスタンス変数
    @hoge = val
  end

  def class_val
    @@hoge
  end

  def instance_val
    @hoge
  end
end


# ダブルアンダースコアはじまりはとくべつな変数
def print__values
  puts __FILE__     # 現在のファイル名を出力
  puts __LINE__     # 現在の行番号を出力
  puts __ENCODING__ # 現在のファイルのエンコーディングを出力
end


if __FILE__ == $0
  p "global values $0 #{$0}, $gurobal #{$gurobal}"

  print "print__values: "
  print__values
  h = Hoge.new(123)
  print "Hoge values: "
  p "h.class_val: #{h.class_val}"
  p "h.instance_val: #{h.instance_val}"
end

