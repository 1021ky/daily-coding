#! /usr/bin/env ruby

#
# 受け付けたブロックを実行する
#
# @param [Proc] the_block 実行したいブロック
#
# @return [Object] ブロックの返り値の型
#
# &が引数につくことでブロックとして扱われて、callで実行できる
def run_block(&the_block)
  the_block.call
end

if __FILE__ == $0
  # ブロックは、{}で定義して渡せる
  run_block { p "hello world"}
  # Procでも作れるが、&をつけてあげないと、ブロックとして渡せない
  run_block &(Proc.new { p "hello world from Proc"})
  # ブロックは、作りかけのオブジェクトであり、callされていないので、実行タイミングが決まっていないと言える？

  # メソッドも、作りかけのオブジェクトであり、呼び出すときに必要な値が決まっていない
  method(:puts).call "putsもオブジェクト"
end