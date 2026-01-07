require 'minitest/autorun'
require_relative './fizzbuzz.rb'

describe "FizzBuzzTest" do
  describe "fizzbuzz" do
    [
      {
        describe: '3の倍数のとき',
        data: 3,
        expected: 'Fizz'
      },
      {
        describe: '5の倍数のとき',
        data: 5,
        expected: 'Buzz'
      },
      {
        describe: '15の倍数のとき',
        data: 15,
        expected: 'FizzBuzz'
      },
      {
        describe: '3,5,15以外の倍数のとき',
        data: 2,
        expected: '2'
      },
    ].each do |test_case|
      it test_case[:describe] do
        actual = fizzbuzz(test_case[:data])
        _(actual).must_equal test_case[:expected]
      end
    end
  end
end