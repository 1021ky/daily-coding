def daily_dir_name
  Time.now.strftime('%Y-%m-%d')
end

def make_daily_dir dir_name
  Dir.mkdir(daily_dir_name)
end

def is_dir_exist? dir_name
  Dir.exist?(daily_dir_name)
end

#
# 実行した日のディレクトリを作成する
#
def main
  dir_name = daily_dir_name
  if is_dir_exist? dir_name
    puts "#{dir_name} already exists."
  else
    make_daily_dir dir_name
  end
end

if __FILE__ == $0
  main
end