def daily_dir_name
  Time.now.strftime('%Y-%m-%d')
end

def make_daily_dir
  Dir.mkdir('2025-03-07')
end

def is_dir_exist?
  Dir.exist?(daily_dir_name)
end

#
# 実行した日のディレクトリを作成する
#
def main
  dir_name = daily_dir_name
  if is_dir_exist?
    puts "#{dir_name} already exists."
  else
    make_daily_dir
  end
end

if __FILE__ == $0
  main
end