require 'minitest/autorun'
require './fizzbuzz.rb'

class FizzBuzzTest < Minitest::Test
    def test_fizzbuzz
        [
            {
                testcase: '3で割り切れるときはfizz',
                param: 3,
                expected: 'fizz'
            },
            {
                testcase: '5で割り切れるときはbuzz',
                param: 5,
                expected: 'buzz'
            },
            {
                testcase: '15で割り切れるときはfizzbuzz',
                param: 15,
                expected: 'fizzbuzz'
            },
            {
                testcase: '3,5,15で割り切れないときはそのまま出力する',
                param: 4,
                expected: '4'
            }
        ].each do |params|
            # Arrange
            param = params[:param]
            expected = params[:expected]
            # Act
            actual = fizzbuzz(param)

            assert_equal(expected, actual)
        end
    end
end