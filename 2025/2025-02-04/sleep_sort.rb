#
# スリープソートで照準にソートする
#
# @param [Integer] target ソート対象
#
# @return [Integer] ソートされた結果
#
def sleep_sort target
  # 並列処理するインスタンスを生成
  ractors = target.map do |t|
    Ractor.new(t) do |t|
      sleep t
      t
    end
  end
  sorted = []
  until ractors.empty?
    # 処理が終わったものから取得する
    r, val= Ractor.select(*ractors)
    sorted << val
    # 処理が終わったインスタンスは結果チェックする一覧からは外す
    ractors.delete(r)
  end
  sorted
end

if __FILE__ == $0
  target = (1..10).to_a.sample(10)
  p sleep_sort(target)
end