#
# 引数の配列を昇順にソートする
#
# @param [Array<Integer>] target 配列
#
# @return [Array<Integer>] ソート結果
#
def sleep_sort target
  ractors = target.map do |t|
    Ractor.new(t) do |t|
      sleep t
      t
    end
  end
  sorted = []
  until ractors.empty?
    finished_ractor, result = Ractor.select(*ractors)
    sorted << result
    ractors.delete(finished_ractor)
  end
  sorted
end

if __FILE__ == $0
  p '期待通り動く'
  target = (0.01..0.30).step(0.01).to_a.sample(30)
  p "before sort:#{target}"
  p sleep_sort(target)
  p '誤差が出る'
  target = (0.001..0.030).step(0.001).to_a.sample(30)
  p "before sort:#{target}"
  p sleep_sort(target)
end