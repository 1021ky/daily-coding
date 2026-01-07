# frozen_string_literal: true

require 'minitest/autorun'
require_relative './binary_search'

class BinarySearchTest < Minitest::Test
  # パラメータ化されたテストケース
  TEST_CASES = [
    { array: [1, 3, 5, 7, 9, 11], target: 5, expected: 2, description: 'ターゲットが配列の中央にある場合' },
    { array: [1, 3, 5, 7, 9, 11], target: 1, expected: 0, description: 'ターゲットが配列の最初にある場合' },
    { array: [1, 3, 5, 7, 9, 11], target: 11, expected: 5, description: 'ターゲットが配列の最後にある場合' },
    { array: [1, 3, 5, 7, 9, 11], target: 6, expected: nil, description: 'ターゲットが配列に存在しない場合' },
    { array: [], target: 1, expected: nil, description: '空の配列の場合' },
    { array: [10], target: 10, expected: 0, description: '配列に1つの要素があり、それがターゲットの場合' },
    { array: [10], target: 5, expected: nil, description: '配列に1つの要素があり、それがターゲットでない場合' }
  ]

  TEST_CASES.each do |test_case|
    define_method("test_#{test_case[:description]}".gsub(/\s+/, '_')) do
      actual = binary_search(test_case[:array], test_case[:target])
      if test_case[:expected].nil?
        assert_nil actual, "Failed for: #{test_case[:description]}"
      else
        assert_equal test_case[:expected], actual, "Failed for: #{test_case[:description]}"
      end
    end
  end
end