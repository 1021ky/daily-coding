require './add.rb'

require "minitest/autorun"

# minitest はunittest verとspec verがある
class TestAdd < Minitest::Test
  def test_add
    expected = 3
    actual = add(1, 2)
    assert_equal(expected, actual)
  end
end

describe 'add' do
    it '2つの整数の和を返す' do
        add(1, 2).must_equal 3
    end
end