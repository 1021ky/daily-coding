#
# Timeオブジェクトを文字列に変換する
# デフォルト引数の初期化タイミングを確認するために書いている
#
def get_time_string(time = Time.now)
    time.to_s
end

ONE_DAY_SECS = 24 * 60 * 60

if __FILE__ == $PROGRAM_NAME
  p $PROGRAM_NAME
  p get_time_string
  p get_time_string(Time.now - ONE_DAY_SECS) # -> 引数に指定された通りの日になる
  p get_time_string(Time.now - 2 *  ONE_DAY_SECS) # -> 引数に指定された通りの日になる
  sleep(3)
  p get_time_string # -> 3s後になる。つまり、デフォルト引数の値は都度評価される
end
