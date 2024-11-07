require "minitest/autorun"

require "./wc"

class TestCharacterCounter< Minitest::Test
    def setup
      @test_target = WC::CharacterCounter
    end

    def test_count_words
      test_data = "abcdefg"
      actual = @test_target.count test_data
      expected = 7
      assert_equal expected, actual
    end

    def test_count_words_with_white_spaces
      test_data = "abc de fg"
      actual = @test_target.count test_data
      expected = 9
      assert_equal expected, actual
    end
end

class TestLineCounter< Minitest::Test
    def setup
      @test_target = WC::LineCounter
    end

    def test_count_words
      test_data = <<~EOF
      abcdefg
      hogehoge
      foofoo

      EOF
      actual = @test_target.count test_data
      expected = 4
      assert_equal expected, actual
    end

    def test_count_words_with_continuous_spaces
      test_data = <<~EOF
      abcdefg

      hog ehoge



      fo ofoo

      EOF
      actual = @test_target.count test_data
      expected = 8
      assert_equal expected, actual
    end

    def test_count_words_with_continuous_spaces
      test_data = <<~EOF
      EOF
      actual = @test_target.count test_data
      expected = 0
      assert_equal expected, actual
    end
end
