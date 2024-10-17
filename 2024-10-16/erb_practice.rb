# https://docs.ruby-lang.org/ja/latest/doc/spec=2fcommands.html
# を読んで試したことメモ

#
# erbモジュールをためす。スクリプトを埋め込んで、動的に文字列を出力。
#
#
# @return [<Type>] <description>
#
def run_erb
  require 'erb'
  template = <<~EOF
    <% 3.times do |n| %>
    % n = 0
    * <%= n%>
    <% end %>
  EOF
  # erubyスクリプトを読み込んで実行
  ERB.new(template).run
end

class Listings
  PRODUCT = { name: 'Chicken Fried Steak',
              desc: 'A well messages pattie, breaded and fried.',
              cost: 9.95 }

  # 読み取り専用メソッド
  attr_reader :product, :price

  def initialize(product = '', price = '')
    @product = product
    @price = price
  end

  def build
    b = binding
    # create and run templates, filling member data variables
    # 奇妙な書き方に見えるけれども<<~で書いているため、次の行の空白後の文字から、終わりの文字列までがヒアドキュメント
    ERB.new(<<~'END_PRODUCT', eoutvar: '@product').result b
      <%= PRODUCT[:name] %>
      <%= PRODUCT[:desc] %>
    END_PRODUCT
    #     template = <<TEMPLATE
    #       <%= PRODUCT[:name] %>
    #       <%= PRODUCT[:desc] %>
    # TEMPLATE
    #     ERB.new(template, eoutvar: "@product").result b
  end
end

def run_erb_sample
  require 'erb'

  # setup template data
  listings = Listings.new
  listings.build

  puts listings.product + "\n" + listings.price
end

if __FILE__ == $0
  # run_erb
  run_erb_sample
end
