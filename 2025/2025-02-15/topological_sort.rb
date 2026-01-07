#
# 渡された有向グラフをトポロジカルソートでソートして配列で返す
#
# @param [Hash<String, Array>] graph ソート対象のグラフ
#
# @return [Array<String>] ソート後の配列
#
def topological_sort(graph)
  in_degrees = calculate_in_degrees(graph)
  sorted = []

  loop do
    # 独立しているノードがなくなったときがソート完了とする
    independent_nodes = find_independent_nodes(in_degrees)
    break if independent_nodes.empty?

    # 入次数0のノードをすべて結果に追加し、グラフから削除する
    independent_nodes.each do |node|
      sorted << node
      remove_node!(graph, in_degrees, node)
    end
  end

  return []
end

#
# グラフから各ノードの入次数（そのノードに依存しているノードの数）を計算して返す関数
#
# @param [Hash<String, Array<String>>] graph ソート対象のグラフ
# @return [Hash<String, Integer>] 各ノードの入次数を表すハッシュ
def calculate_in_degrees(graph)
  # TODO: 各ノードの入次数(in-degree)を計算するロジックを実装
  {}
end

#
# 入次数が0の独立したノード（依存関係のないノード）を導出する関数
#
# @param [Hash<String, Integer>] in_degrees 各ノードの入次数
# @return [Array<String>] 値が0になっているノードの配列
def find_independent_nodes(in_degrees)
  # TODO: 入次数が0のノードを抽出するロジックを実装
  []
end

#
# 指定したノードをグラフと入次数ハッシュから削除する関数
# そのノードに隣接するノードの入次数も更新する
#
# @param [Hash<String, Array<String>>] graph ソート対象のグラフ
# @param [Hash<String, Integer>] in_degrees 各ノードの入次数
# @param [String] node 削除するノード
# @return [void]
def remove_node!(graph, in_degrees, node)
  # TODO: 指定したノードとそのエッジをグラフから削除するロジックを実装
end