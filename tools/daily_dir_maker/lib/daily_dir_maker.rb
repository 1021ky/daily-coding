# frozen_string_literal: true

require_relative "daily_dir_maker/version"

module DailyDirMaker
  module_function


def check_dir_exists(name:)
  Dir.exist? name
end

def make_dir(name:)
  Dir.mkdir(name)
end

def directory_name
  Time.now.strftime('%Y-%m-%d')
end

def already_exists_msg(name:)
  "#{name} already exists."
end

def print_error_msg(msg:)
  warn msg
end

def success_msg(directory_name:)
  # ターミナルで実行したときに他のコマンドが使いやすいようにディレクトリ名だけ返す
  directory_name
end

def print_success_msg(msg:)
  puts msg
end

def make
  name = directory_name
  if check_dir_exists(name:)
    msg = already_exists_msg(name:)
    print_error_msg(msg:)
  else
    make_dir(name:)
    msg = success_msg(directory_name: name)
    print_success_msg(msg:)
  end
end



end

make_daily_dir if __FILE__ == $PROGRAM_NAME
