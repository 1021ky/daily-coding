require 'minitest/autorun'
require_relative 'topological_sort'

describe "topological_sort" do
  [
    {
      case: '空のグラフの場合は空の配列が返されること',
      test_data: {},
      expected: []
    },
    {
      case: '頂点が1つのグラフの場合は単一の頂点が返されること',
      test_data: {A: []},
      expected: [:A]
    },
    {
      case: 'シンプルなグラフの場合は期待したソート結果が返されること',
      test_data: {A:[:B], B: []},
      expected: [:A, :B]
    },
  ].each do |context|
    it context[:case] do
      _(topological_sort(context[:test_data])).must_equal context[:expected]
    end
  end
end