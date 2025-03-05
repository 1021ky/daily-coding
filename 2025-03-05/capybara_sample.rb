require 'capybara/minitest'
require 'capybara/minitest/spec'
#
# capybaraとminitestを組み合わせたテスト
# macで実行すると、セキュリティでchrome driverの実行がブロックされるため許可が必要
#
class CapybaraTestCase < Minitest::Test
  include Capybara::DSL
  include Capybara::Minitest::Assertions

  def setup
    # ドライバーをセット。Macだとbrewでbrew install --cask chromedriverでインストールしたChromeDriverを使う
    Capybara.default_driver = :selenium_chrome
  end

  def teardown
    Capybara.reset_sessions!
    Capybara.use_default_driver
  end

  def test_opens_aobato_page
    visit 'https://www.suntory.co.jp/eco/birds/encyclopedia/'
    click_link 'アオバト'
    assert page.has_content?('アオバト')
  end
end

if __FILE__ == $0
  Minitest.run
end