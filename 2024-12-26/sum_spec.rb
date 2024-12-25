# ファイル内のすべての文字列をイミュータブルにすることでメモリ効率化やパフォーマンス向上につなげる
# frozen_string_literal: true

require "minitest/autorun"
require "sum"

class SumTest < Minitest::Test

  def test_test
    expected = 7
    # arrange
    a=4
    b=3
    # action
    actual = sum_values(a, b)
    # assert
    assert_equal(expected, actual)
  end
end

