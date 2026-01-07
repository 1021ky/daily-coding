# frozen_string_literal: true

require 'minitest/autorun'
require './scan_email'

describe 'ScanEmail' do
  [{
    description: 'valid_emails',
    input: {
      text: <<~TEXT,
        お問い合わせはこちら: support@example.com
        担当者: tanaka.taro@company.co.jp
        チームアドレス: team@project.org
        無効な例: example@com, @missingprefix.com, invalid@@domain.com
      TEXT
      expected: ['support@example.com', 'tanaka.taro@company.co.jp', 'team@project.org']
    }
  },
   {
     description: 'empty_string',
     input: {
       text: '',
       expected: []
     }
   }].each do |test_case|
    it "scan_email: #{test_case[:description]}" do
      input = test_case[:input]
      actual = scan_email(input[:text])
      assert_equal input[:expected].sort, actual.sort
    end
  end
end
