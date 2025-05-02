
#
# rubyインタプリタで実行されたファイル名を標準出力する
#
# ruby main.rbであれば、"main.rb"
# ruby 2025-05-02/main.rbであれば、"2025-05-02/main.rb"
#
def printProgramname
  p $PROGRAM_NAME
end

#
# プログラムのエントリポイントとして実行される関数
#
def run
  printProgramname
end

if __FILE__ == $PROGRAM_NAME
  run
end