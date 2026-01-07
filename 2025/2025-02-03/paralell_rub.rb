# frozen_string_literal: true


def run_paralell
  Ractor.new do
    5.times do
      puts :hoge
    end
  end

  Ractor.new do
    5.times do
      puts :fuga
    end
  end
  sleep(0.1)
end

if __FILE__ == $0
  run_paralell
end