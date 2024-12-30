require 'minitest/autorun'
require_relative 'insert_sort'

describe 'sort' do
  # テスト用のデータを配列でまとめる
  test_data = [
    { name: '並べ替え(通常)', param: [5, 2, 4, 6, 1, 3], expected: [1, 2, 3, 4, 5, 6] },
    { name: '空配列',         param: [],                 expected: [] },
    { name: '要素1つだけ',   param: [42],               expected: [42] }
  ]

  # それぞれのパラメータでテストを回す
  test_data.each do |data|
    it "#{data[:name]}: #{data[:param]} をソートする" do
      actual = sort(data[:param].dup)  # 元の配列を破壊したくない場合はdupを使う
      _(actual).must_equal data[:expected]
    end
  end
end