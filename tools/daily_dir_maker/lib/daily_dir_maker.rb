# frozen_string_literal: true

require_relative 'daily_dir_maker/version'

module DailyDirMaker

  def self.make
    name = directory_name
    if check_dir_exists(name:)
      msg = already_exists_msg(name:)
      print_error_msg(std_msg: name, err_msg: msg)
    else
      make_dir(name:)
      msg = success_msg(directory_name: name)
      print_success_msg(msg:)
    end
  end


  private

  def self.check_dir_exists(name:)
    Dir.exist? name
  end

  def self.make_dir(name:)
    Dir.mkdir(name)
  end

  def self.directory_name
    Time.now.strftime('%Y-%m-%d')
  end

  def self.already_exists_msg(name:)
    "#{name} already exists."
  end

  def self.print_error_msg(std_msg:, err_msg:)
    warn err_msg
    puts std_msg
  end

  def self.success_msg(directory_name:)
    # ターミナルで実行したときに他のコマンドが使いやすいようにディレクトリ名だけ返す
    directory_name
  end

  def self.print_success_msg(msg:)
    puts msg
  end
end

