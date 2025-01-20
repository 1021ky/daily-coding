# frozen_string_literal: true

require 'minitest/autorun'
require './scan_email'

class ScanEmailTest < Minitest::Test
  def test_scan_email
    text = <<~TEXT
      お問い合わせはこちら: support@example.com
      担当者: tanaka.taro@company.co.jp
      チームアドレス: team@project.org
      無効な例: example@com, @missingprefix.com, invalid@@domain.com
    TEXT
    actual = scan_email(text)
    expected = ['support@example.com', 'tanaka.taro@company.co.jp', 'team@project.org']
    assert_equal expected.sort, actual.sort
  end

  def test_scan_email_empty_str
    text = ''
    actual = scan_email(text)
    expected = []
    assert_equal expected.sort, actual.sort
  end
end
