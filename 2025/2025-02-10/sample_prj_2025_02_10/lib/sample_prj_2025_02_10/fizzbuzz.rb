# frozen_string_literal: true

#
# FizzBuzzを実行するためのクラス
#
class SamplePrj20250210::FizzBuzz
  #
  # コンストラクタ
  #
  # @param [Range] range FizzBuzzを表示する範囲
  #
  def initialize(range)
    @range = range
  end

  def run
    @range.map do |n|
      fizzbuzz n
    end
  end

  def fizzbuzz(target)
    if (target % 15).zero?
      'fizzbuzz'
    elsif (target % 3).zero?
      'fizz'
    elsif (target % 5).zero?
      'buzz'
    else
      target.to_s
    end
  end
end
