# frozen_string_literal: true

if __FILE__ == $PROGRAM_NAME
  text = <<~TEXT
    お問い合わせはこちら: support@example.com
    担当者: tanaka.taro@company.co.jp
    チームアドレス: team@project.org
    無効な例: example@com, @missingprefix.com, invalid@@domain.com
  TEXT
  scan_email
  scan_user
end
