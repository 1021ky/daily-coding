# frozen_string_literal: true

require 'minitest/autorun'
require './try_rexp'

class TestCharacterCounter < Minitest::Test
  def test_contains?
    sentence = 'I\'m a human'
    word = 'man'
    expected = false
    actual = contains?(sentence, word)
    assert_equal(expected, actual)
  end
end
