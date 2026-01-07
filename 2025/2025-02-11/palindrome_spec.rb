require 'minitest/autorun'
require './palindrome'

describe "palindrome" do
    [
      { ctx: '回文となる単語が渡されたとき',
        target: "Racecar",
        expected: true },
      { ctx: '大文字・小文字を含んだ回文が渡されたとき',
        target: "Madam, in Eden, I'm Adam.",
        expected: true },
      { ctx: '記号を含む回文が渡されたとき',
        target: "Was it a car or a cat I saw?",
        expected: true },
      { ctx: '回文ではない文が渡されたとき',
        target: "It is a cat",
        expected: false },
    ].each do |test_case|
      it (test_case[:ctx]).to_s do
        _(palindrome?(test_case[:target])).must_equal test_case[:expected]
      end
    end
end